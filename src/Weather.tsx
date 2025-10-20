import axios from "axios";
import {useState} from "react";

interface Weather {
  temp_C: string;
  weatherDesc: {value: string}[];
}

interface WeatherResponse {
  current_condition: Weather[];
  nearest_area: [{
    areaName: [{value: string}];
    region: [{value: string}];
    country: [{value: string}];
  }];
}

const formatLocation = (area: string, region: string, country: string): string => {
  // Loại bỏ khoảng trắng thừa
  const cleanArea = area.trim();
  const cleanRegion = region.trim();
  const cleanCountry = country.trim();

  // Tạo mảng các phần tử không rỗng
  const locationParts = [cleanArea, cleanRegion, cleanCountry]
    .filter(part => part && part.length > 0)
    // Loại bỏ các phần tử trùng lặp
    .filter((part, index, self) => self.indexOf(part) === index);

  // Ghép các phần tử lại với nhau bằng dấu phẩy
  return locationParts.join(", ");
};

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [locationInfo, setLocationInfo] = useState<WeatherResponse['nearest_area'][0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get<WeatherResponse>(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data.current_condition[0]);
      setLocationInfo(res.data.nearest_area[0]);
    } catch {
      setError("Không tìm thấy thành phố!");
      setWeather(null);
      setLocationInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Dự báo thời tiết</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập tên thành phố..."
          style={{ flex: 1 }}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button 
          onClick={fetchWeather}
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Xem thời tiết
        </button>
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Đang tải...</p>}
      {error && <p style={{ color: "red", textAlign: 'center' }}>{error}</p>}

      {weather && locationInfo && (
        <div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>
            Thời tiết tại: {formatLocation(
              locationInfo.areaName[0].value,
              locationInfo.region[0].value,
              locationInfo.country[0].value
            )}
          </h2>
          <h3>Nhiệt độ: {weather.temp_C}°C</h3>
          <p>{weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}
