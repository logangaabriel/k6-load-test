import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '10m',
  vus: 200,
  thresholds: {
    http_req_duration: ['p(95)<1200'], 
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
