Package.describe({
  name: 'semantic:ui-data',
  version: '1.12.0_2',
  summary: 'Data package for Semantic UI Meteor',
  git: 'https://github.com/Semantic-Org/Semantic-UI-Meteor-Data.git',
  documentation: 'README.md'
});

var definitions = ["lib/semantic-ui/src/definitions/collections/breadcrumb.less","lib/semantic-ui/src/definitions/collections/form.less","lib/semantic-ui/src/definitions/collections/grid.less","lib/semantic-ui/src/definitions/collections/menu.less","lib/semantic-ui/src/definitions/collections/message.less","lib/semantic-ui/src/definitions/collections/table.less","lib/semantic-ui/src/definitions/behaviors/api.js","lib/semantic-ui/src/definitions/behaviors/colorize.js","lib/semantic-ui/src/definitions/behaviors/form.js","lib/semantic-ui/src/definitions/behaviors/state.js","lib/semantic-ui/src/definitions/behaviors/visibility.js","lib/semantic-ui/src/definitions/behaviors/visit.js","lib/semantic-ui/src/definitions/globals/reset.less","lib/semantic-ui/src/definitions/globals/site.js","lib/semantic-ui/src/definitions/globals/site.less","lib/semantic-ui/src/definitions/elements/button.less","lib/semantic-ui/src/definitions/elements/divider.less","lib/semantic-ui/src/definitions/elements/flag.less","lib/semantic-ui/src/definitions/elements/header.less","lib/semantic-ui/src/definitions/elements/icon.less","lib/semantic-ui/src/definitions/elements/image.less","lib/semantic-ui/src/definitions/elements/input.less","lib/semantic-ui/src/definitions/elements/label.less","lib/semantic-ui/src/definitions/elements/list.less","lib/semantic-ui/src/definitions/elements/loader.less","lib/semantic-ui/src/definitions/elements/rail.less","lib/semantic-ui/src/definitions/elements/reveal.less","lib/semantic-ui/src/definitions/elements/segment.less","lib/semantic-ui/src/definitions/elements/step.less","lib/semantic-ui/src/definitions/modules/accordion.js","lib/semantic-ui/src/definitions/modules/accordion.less","lib/semantic-ui/src/definitions/modules/checkbox.js","lib/semantic-ui/src/definitions/modules/checkbox.less","lib/semantic-ui/src/definitions/modules/dimmer.js","lib/semantic-ui/src/definitions/modules/dimmer.less","lib/semantic-ui/src/definitions/modules/dropdown.js","lib/semantic-ui/src/definitions/modules/dropdown.less","lib/semantic-ui/src/definitions/modules/modal.js","lib/semantic-ui/src/definitions/modules/modal.less","lib/semantic-ui/src/definitions/modules/nag.js","lib/semantic-ui/src/definitions/modules/nag.less","lib/semantic-ui/src/definitions/modules/popup.js","lib/semantic-ui/src/definitions/modules/popup.less","lib/semantic-ui/src/definitions/modules/progress.js","lib/semantic-ui/src/definitions/modules/progress.less","lib/semantic-ui/src/definitions/modules/rating.js","lib/semantic-ui/src/definitions/modules/rating.less","lib/semantic-ui/src/definitions/modules/search.js","lib/semantic-ui/src/definitions/modules/search.less","lib/semantic-ui/src/definitions/modules/shape.js","lib/semantic-ui/src/definitions/modules/shape.less","lib/semantic-ui/src/definitions/modules/sidebar.js","lib/semantic-ui/src/definitions/modules/sidebar.less","lib/semantic-ui/src/definitions/modules/sticky.js","lib/semantic-ui/src/definitions/modules/sticky.less","lib/semantic-ui/src/definitions/modules/tab.js","lib/semantic-ui/src/definitions/modules/tab.less","lib/semantic-ui/src/definitions/modules/transition.js","lib/semantic-ui/src/definitions/modules/transition.less","lib/semantic-ui/src/definitions/modules/video.js","lib/semantic-ui/src/definitions/modules/video.less","lib/semantic-ui/src/definitions/views/ad.less","lib/semantic-ui/src/definitions/views/card.less","lib/semantic-ui/src/definitions/views/comment.less","lib/semantic-ui/src/definitions/views/feed.less","lib/semantic-ui/src/definitions/views/item.less","lib/semantic-ui/src/definitions/views/statistic.less"];
var themes = ["lib/semantic-ui/src/themes/bookish/elements/header.overrides","lib/semantic-ui/src/themes/bookish/elements/header.variables","lib/semantic-ui/src/themes/amazon/elements/button.overrides","lib/semantic-ui/src/themes/amazon/elements/button.variables","lib/semantic-ui/src/themes/basic/collections/table.overrides","lib/semantic-ui/src/themes/basic/collections/table.variables","lib/semantic-ui/src/themes/basic/elements/button.overrides","lib/semantic-ui/src/themes/basic/elements/button.variables","lib/semantic-ui/src/themes/basic/elements/icon.overrides","lib/semantic-ui/src/themes/basic/elements/icon.variables","lib/semantic-ui/src/themes/basic/elements/step.overrides","lib/semantic-ui/src/themes/basic/elements/step.variables","lib/semantic-ui/src/themes/basic/globals/reset.overrides","lib/semantic-ui/src/themes/basic/globals/reset.variables","lib/semantic-ui/src/themes/basic/modules/progress.overrides","lib/semantic-ui/src/themes/basic/modules/progress.variables","lib/semantic-ui/src/themes/basic/views/card.overrides","lib/semantic-ui/src/themes/basic/views/card.variables","lib/semantic-ui/src/themes/bootstrap3/elements/button.overrides","lib/semantic-ui/src/themes/bootstrap3/elements/button.variables","lib/semantic-ui/src/themes/chubby/collections/form.overrides","lib/semantic-ui/src/themes/chubby/collections/form.variables","lib/semantic-ui/src/themes/chubby/elements/button.overrides","lib/semantic-ui/src/themes/chubby/elements/button.variables","lib/semantic-ui/src/themes/chubby/elements/header.overrides","lib/semantic-ui/src/themes/chubby/elements/header.variables","lib/semantic-ui/src/themes/chubby/modules/accordion.overrides","lib/semantic-ui/src/themes/chubby/modules/accordion.variables","lib/semantic-ui/src/themes/chubby/views/comment.overrides","lib/semantic-ui/src/themes/chubby/views/comment.variables","lib/semantic-ui/src/themes/classic/collections/table.overrides","lib/semantic-ui/src/themes/classic/collections/table.variables","lib/semantic-ui/src/themes/classic/elements/button.overrides","lib/semantic-ui/src/themes/classic/elements/button.variables","lib/semantic-ui/src/themes/classic/elements/header.overrides","lib/semantic-ui/src/themes/classic/elements/header.variables","lib/semantic-ui/src/themes/classic/modules/progress.overrides","lib/semantic-ui/src/themes/classic/modules/progress.variables","lib/semantic-ui/src/themes/classic/views/card.overrides","lib/semantic-ui/src/themes/classic/views/card.variables","lib/semantic-ui/src/themes/default/collections/breadcrumb.overrides","lib/semantic-ui/src/themes/default/collections/breadcrumb.variables","lib/semantic-ui/src/themes/default/collections/form.overrides","lib/semantic-ui/src/themes/default/collections/form.variables","lib/semantic-ui/src/themes/default/collections/grid.overrides","lib/semantic-ui/src/themes/default/collections/grid.variables","lib/semantic-ui/src/themes/default/collections/menu.overrides","lib/semantic-ui/src/themes/default/collections/menu.variables","lib/semantic-ui/src/themes/default/collections/message.overrides","lib/semantic-ui/src/themes/default/collections/message.variables","lib/semantic-ui/src/themes/default/collections/table.overrides","lib/semantic-ui/src/themes/default/collections/table.variables","lib/semantic-ui/src/themes/default/globals/reset.overrides","lib/semantic-ui/src/themes/default/globals/reset.variables","lib/semantic-ui/src/themes/default/globals/site.overrides","lib/semantic-ui/src/themes/default/globals/site.variables","lib/semantic-ui/src/themes/default/modules/accordion.overrides","lib/semantic-ui/src/themes/default/modules/accordion.variables","lib/semantic-ui/src/themes/default/modules/chatroom.overrides","lib/semantic-ui/src/themes/default/modules/chatroom.variables","lib/semantic-ui/src/themes/default/modules/checkbox.overrides","lib/semantic-ui/src/themes/default/modules/checkbox.variables","lib/semantic-ui/src/themes/default/modules/dimmer.overrides","lib/semantic-ui/src/themes/default/modules/dimmer.variables","lib/semantic-ui/src/themes/default/modules/dropdown.overrides","lib/semantic-ui/src/themes/default/modules/dropdown.variables","lib/semantic-ui/src/themes/default/modules/modal.overrides","lib/semantic-ui/src/themes/default/modules/modal.variables","lib/semantic-ui/src/themes/default/modules/nag.overrides","lib/semantic-ui/src/themes/default/modules/nag.variables","lib/semantic-ui/src/themes/default/modules/popup.overrides","lib/semantic-ui/src/themes/default/modules/popup.variables","lib/semantic-ui/src/themes/default/modules/progress.overrides","lib/semantic-ui/src/themes/default/modules/progress.variables","lib/semantic-ui/src/themes/default/modules/rating.overrides","lib/semantic-ui/src/themes/default/modules/rating.variables","lib/semantic-ui/src/themes/default/modules/search.overrides","lib/semantic-ui/src/themes/default/modules/search.variables","lib/semantic-ui/src/themes/default/modules/shape.overrides","lib/semantic-ui/src/themes/default/modules/shape.variables","lib/semantic-ui/src/themes/default/modules/sidebar.overrides","lib/semantic-ui/src/themes/default/modules/sidebar.variables","lib/semantic-ui/src/themes/default/modules/sticky.overrides","lib/semantic-ui/src/themes/default/modules/sticky.variables","lib/semantic-ui/src/themes/default/modules/tab.overrides","lib/semantic-ui/src/themes/default/modules/tab.variables","lib/semantic-ui/src/themes/default/modules/transition.overrides","lib/semantic-ui/src/themes/default/modules/transition.variables","lib/semantic-ui/src/themes/default/modules/video.overrides","lib/semantic-ui/src/themes/default/modules/video.variables","lib/semantic-ui/src/themes/default/views/ad.overrides","lib/semantic-ui/src/themes/default/views/ad.variables","lib/semantic-ui/src/themes/default/views/card.overrides","lib/semantic-ui/src/themes/default/views/card.variables","lib/semantic-ui/src/themes/default/views/comment.overrides","lib/semantic-ui/src/themes/default/views/comment.variables","lib/semantic-ui/src/themes/default/views/feed.overrides","lib/semantic-ui/src/themes/default/views/feed.variables","lib/semantic-ui/src/themes/default/views/item.overrides","lib/semantic-ui/src/themes/default/views/item.variables","lib/semantic-ui/src/themes/default/views/statistic.overrides","lib/semantic-ui/src/themes/default/views/statistic.variables","lib/semantic-ui/src/themes/fixed-width/collections/grid.overrides","lib/semantic-ui/src/themes/fixed-width/collections/grid.variables","lib/semantic-ui/src/themes/fixed-width/modules/modal.overrides","lib/semantic-ui/src/themes/fixed-width/modules/modal.variables","lib/semantic-ui/src/themes/flat/collections/form.overrides","lib/semantic-ui/src/themes/flat/collections/form.variables","lib/semantic-ui/src/themes/flat/globals/site.overrides","lib/semantic-ui/src/themes/flat/globals/site.variables","lib/semantic-ui/src/themes/github/collections/form.overrides","lib/semantic-ui/src/themes/github/collections/form.variables","lib/semantic-ui/src/themes/github/collections/menu.overrides","lib/semantic-ui/src/themes/github/collections/menu.variables","lib/semantic-ui/src/themes/github/collections/message.overrides","lib/semantic-ui/src/themes/github/collections/message.variables","lib/semantic-ui/src/themes/github/elements/button.overrides","lib/semantic-ui/src/themes/github/elements/button.variables","lib/semantic-ui/src/themes/github/elements/segment.overrides","lib/semantic-ui/src/themes/github/elements/segment.variables","lib/semantic-ui/src/themes/github/elements/step.overrides","lib/semantic-ui/src/themes/github/elements/step.variables","lib/semantic-ui/src/themes/duo/elements/loader.overrides","lib/semantic-ui/src/themes/duo/elements/loader.variables","lib/semantic-ui/src/themes/pulsar/elements/loader.overrides","lib/semantic-ui/src/themes/pulsar/elements/loader.variables","lib/semantic-ui/src/themes/raised/elements/button.overrides","lib/semantic-ui/src/themes/raised/elements/button.variables","lib/semantic-ui/src/themes/resetcss/globals/reset.overrides","lib/semantic-ui/src/themes/resetcss/globals/reset.variables","lib/semantic-ui/src/themes/rtl/globals/site.overrides","lib/semantic-ui/src/themes/rtl/globals/site.variables","lib/semantic-ui/src/themes/gmail/collections/message.overrides","lib/semantic-ui/src/themes/gmail/collections/message.variables","lib/semantic-ui/src/themes/material/elements/button.overrides","lib/semantic-ui/src/themes/material/elements/button.variables","lib/semantic-ui/src/themes/material/elements/header.overrides","lib/semantic-ui/src/themes/material/elements/header.variables","lib/semantic-ui/src/themes/default/elements/button.overrides","lib/semantic-ui/src/themes/default/elements/button.variables","lib/semantic-ui/src/themes/default/elements/divider.overrides","lib/semantic-ui/src/themes/default/elements/divider.variables","lib/semantic-ui/src/themes/default/elements/flag.overrides","lib/semantic-ui/src/themes/default/elements/flag.variables","lib/semantic-ui/src/themes/default/elements/header.overrides","lib/semantic-ui/src/themes/default/elements/header.variables","lib/semantic-ui/src/themes/default/elements/icon.overrides","lib/semantic-ui/src/themes/default/elements/icon.variables","lib/semantic-ui/src/themes/default/elements/image.overrides","lib/semantic-ui/src/themes/default/elements/image.variables","lib/semantic-ui/src/themes/default/elements/input.overrides","lib/semantic-ui/src/themes/default/elements/input.variables","lib/semantic-ui/src/themes/default/elements/label.overrides","lib/semantic-ui/src/themes/default/elements/label.variables","lib/semantic-ui/src/themes/default/elements/list.overrides","lib/semantic-ui/src/themes/default/elements/list.variables","lib/semantic-ui/src/themes/default/elements/loader.overrides","lib/semantic-ui/src/themes/default/elements/loader.variables","lib/semantic-ui/src/themes/default/elements/rail.overrides","lib/semantic-ui/src/themes/default/elements/rail.variables","lib/semantic-ui/src/themes/default/elements/reveal.overrides","lib/semantic-ui/src/themes/default/elements/reveal.variables","lib/semantic-ui/src/themes/default/elements/segment.overrides","lib/semantic-ui/src/themes/default/elements/segment.variables","lib/semantic-ui/src/themes/default/elements/step.overrides","lib/semantic-ui/src/themes/default/elements/step.variables","lib/semantic-ui/src/themes/material/globals/site.overrides","lib/semantic-ui/src/themes/material/globals/site.variables","lib/semantic-ui/src/themes/material/modules/modal.overrides","lib/semantic-ui/src/themes/material/modules/modal.variables","lib/semantic-ui/src/themes/twitter/elements/button.overrides","lib/semantic-ui/src/themes/twitter/elements/button.variables","lib/semantic-ui/src/themes/timeline/views/feed.overrides","lib/semantic-ui/src/themes/timeline/views/feed.variables","lib/semantic-ui/src/themes/round/elements/button.overrides","lib/semantic-ui/src/themes/round/elements/button.variables","lib/semantic-ui/src/themes/striped/modules/progress.overrides","lib/semantic-ui/src/themes/striped/modules/progress.variables","lib/semantic-ui/src/themes/basic/assets/fonts/icons.eot","lib/semantic-ui/src/themes/basic/assets/fonts/icons.svg","lib/semantic-ui/src/themes/basic/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/basic/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/fonts/icons.eot","lib/semantic-ui/src/themes/default/assets/fonts/icons.svg","lib/semantic-ui/src/themes/default/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff2","lib/semantic-ui/src/themes/default/assets/images/flags.png"];
var sites = ["lib/semantic-ui/src/site/elements/button.overrides.import.less","lib/semantic-ui/src/site/elements/button.variables.import.less","lib/semantic-ui/src/site/elements/divider.overrides.import.less","lib/semantic-ui/src/site/elements/divider.variables.import.less","lib/semantic-ui/src/site/elements/flag.overrides.import.less","lib/semantic-ui/src/site/elements/flag.variables.import.less","lib/semantic-ui/src/site/elements/header.overrides.import.less","lib/semantic-ui/src/site/elements/header.variables.import.less","lib/semantic-ui/src/site/elements/icon.overrides.import.less","lib/semantic-ui/src/site/elements/icon.variables.import.less","lib/semantic-ui/src/site/elements/image.overrides.import.less","lib/semantic-ui/src/site/elements/image.variables.import.less","lib/semantic-ui/src/site/elements/input.overrides.import.less","lib/semantic-ui/src/site/elements/input.variables.import.less","lib/semantic-ui/src/site/elements/label.overrides.import.less","lib/semantic-ui/src/site/elements/label.variables.import.less","lib/semantic-ui/src/site/elements/list.overrides.import.less","lib/semantic-ui/src/site/elements/list.variables.import.less","lib/semantic-ui/src/site/elements/loader.overrides.import.less","lib/semantic-ui/src/site/elements/loader.variables.import.less","lib/semantic-ui/src/site/elements/rail.overrides.import.less","lib/semantic-ui/src/site/elements/rail.variables.import.less","lib/semantic-ui/src/site/elements/reveal.overrides.import.less","lib/semantic-ui/src/site/elements/reveal.variables.import.less","lib/semantic-ui/src/site/elements/segment.overrides.import.less","lib/semantic-ui/src/site/elements/segment.variables.import.less","lib/semantic-ui/src/site/elements/step.overrides.import.less","lib/semantic-ui/src/site/elements/step.variables.import.less","lib/semantic-ui/src/site/globals/reset.overrides.import.less","lib/semantic-ui/src/site/globals/reset.variables.import.less","lib/semantic-ui/src/site/globals/site.overrides.import.less","lib/semantic-ui/src/site/globals/site.variables.import.less","lib/semantic-ui/src/site/modules/accordion.overrides.import.less","lib/semantic-ui/src/site/modules/accordion.variables.import.less","lib/semantic-ui/src/site/modules/chatroom.overrides.import.less","lib/semantic-ui/src/site/modules/chatroom.variables.import.less","lib/semantic-ui/src/site/modules/checkbox.overrides.import.less","lib/semantic-ui/src/site/modules/checkbox.variables.import.less","lib/semantic-ui/src/site/modules/dimmer.overrides.import.less","lib/semantic-ui/src/site/modules/dimmer.variables.import.less","lib/semantic-ui/src/site/modules/dropdown.overrides.import.less","lib/semantic-ui/src/site/modules/dropdown.variables.import.less","lib/semantic-ui/src/site/modules/modal.overrides.import.less","lib/semantic-ui/src/site/modules/modal.variables.import.less","lib/semantic-ui/src/site/modules/nag.overrides.import.less","lib/semantic-ui/src/site/modules/nag.variables.import.less","lib/semantic-ui/src/site/modules/popup.overrides.import.less","lib/semantic-ui/src/site/modules/popup.variables.import.less","lib/semantic-ui/src/site/modules/progress.overrides.import.less","lib/semantic-ui/src/site/modules/progress.variables.import.less","lib/semantic-ui/src/site/modules/rating.overrides.import.less","lib/semantic-ui/src/site/modules/rating.variables.import.less","lib/semantic-ui/src/site/modules/search.overrides.import.less","lib/semantic-ui/src/site/modules/search.variables.import.less","lib/semantic-ui/src/site/modules/shape.overrides.import.less","lib/semantic-ui/src/site/modules/shape.variables.import.less","lib/semantic-ui/src/site/modules/sidebar.overrides.import.less","lib/semantic-ui/src/site/modules/sidebar.variables.import.less","lib/semantic-ui/src/site/modules/sticky.overrides.import.less","lib/semantic-ui/src/site/modules/sticky.variables.import.less","lib/semantic-ui/src/site/modules/tab.overrides.import.less","lib/semantic-ui/src/site/modules/tab.variables.import.less","lib/semantic-ui/src/site/modules/transition.overrides.import.less","lib/semantic-ui/src/site/modules/transition.variables.import.less","lib/semantic-ui/src/site/modules/video.overrides.import.less","lib/semantic-ui/src/site/modules/video.variables.import.less","lib/semantic-ui/src/site/collections/breadcrumb.overrides.import.less","lib/semantic-ui/src/site/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/site/collections/form.overrides.import.less","lib/semantic-ui/src/site/collections/form.variables.import.less","lib/semantic-ui/src/site/collections/grid.overrides.import.less","lib/semantic-ui/src/site/collections/grid.variables.import.less","lib/semantic-ui/src/site/collections/menu.overrides.import.less","lib/semantic-ui/src/site/collections/menu.variables.import.less","lib/semantic-ui/src/site/collections/message.overrides.import.less","lib/semantic-ui/src/site/collections/message.variables.import.less","lib/semantic-ui/src/site/collections/table.overrides.import.less","lib/semantic-ui/src/site/collections/table.variables.import.less","lib/semantic-ui/src/site/views/ad.overrides.import.less","lib/semantic-ui/src/site/views/ad.variables.import.less","lib/semantic-ui/src/site/views/card.overrides.import.less","lib/semantic-ui/src/site/views/card.variables.import.less","lib/semantic-ui/src/site/views/comment.overrides.import.less","lib/semantic-ui/src/site/views/comment.variables.import.less","lib/semantic-ui/src/site/views/feed.overrides.import.less","lib/semantic-ui/src/site/views/feed.variables.import.less","lib/semantic-ui/src/site/views/item.overrides.import.less","lib/semantic-ui/src/site/views/item.variables.import.less","lib/semantic-ui/src/site/views/statistic.overrides.import.less","lib/semantic-ui/src/site/views/statistic.variables.import.less"];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('semantic-ui-data.js', 'server');
  api.export(['semanticUiDataPackage']);

  api.addFiles(definitions, 'server', { isAsset: true });
  api.addFiles(themes, 'server', { isAsset: true });
  api.addFiles(sites, 'server', { isAsset: true });
  api.addFiles('lib/semantic-ui/src/theme.import.less', 'server', { isAsset: true });
  api.addFiles('lib/semantic-ui/src/semantic.less', 'server', { isAsset: true });
  api.addFiles('lib/semantic-ui/src/theme.config.import.less', 'server', { isAsset: true });
});
