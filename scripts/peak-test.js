import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 }, 
    { duration: '30s', target: 100 }, 
    { duration: '10s', target: 200 }, 
    { duration: '30s', target: 200 }, 
    { duration: '10s', target: 0 }, 
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], 
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
