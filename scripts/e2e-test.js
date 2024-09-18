import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '5m',
  thresholds: {
    http_req_duration: ['p(95)<1500'], 
  },
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, { 'status was 200': (r) => r.status === 200 });

  res = http.get('https://test.k6.io/contact');
  check(res, { 'status was 200': (r) => r.status === 200 });

  sleep(1);
}
