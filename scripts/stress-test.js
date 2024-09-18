import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 50 }, 
    { duration: '3m', target: 100 }, 
    { duration: '5m', target: 0 }, 
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], 
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
