import {Config} from 'aurelia-view-manager';

// added for bundling
export {Datatable} from './datatable';
export {ConvertManagerValueConverter} from './convert-manager';

export function configure(aurelia) {
  aurelia.plugin('aurelia-pager');

  aurelia.container.get(Config).configureNamespace('spoonx/datatable', {
    location: './{{framework}}/{{view}}.html'
  });

  aurelia.globalResources('./datatable');
}

export {
  Config
};
