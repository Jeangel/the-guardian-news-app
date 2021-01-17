import { dark } from './dark';
import { light } from './light';
import { shared } from './shared';
import { merge } from 'lodash';

export default [merge(dark, shared), merge(light, shared)];
