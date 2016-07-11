import { debounce } from 'lodash';
import nprogress from 'nprogress';

const DEBOUNCE_TIME = 500;

nprogress.done = debounce(nprogress.done, DEBOUNCE_TIME);
nprogress.start = debounce(nprogress.start, DEBOUNCE_TIME);

export default class Spinner {
  static configure(params) {
    nprogress.configure(params);
  }

  static show() {
    nprogress.start();
  }

  static hide() {
    nprogress.done();
  }
}
