Package.describe({
  name: 'semantic:ui-data',
  version: '2.1.6',
  summary: 'Data package for Semantic UI Meteor',
  git: 'git@github.com:Semantic-Org/Semantic-UI-Meteor-Data.git',
  documentation: 'README.md'
});

var definitions = ["lib/semantic-ui/src/definitions/behaviors/api.js","lib/semantic-ui/src/definitions/behaviors/colorize.js","lib/semantic-ui/src/definitions/behaviors/form.js","lib/semantic-ui/src/definitions/behaviors/state.js","lib/semantic-ui/src/definitions/behaviors/visibility.js","lib/semantic-ui/src/definitions/behaviors/visit.js","lib/semantic-ui/src/definitions/collections/breadcrumb.import.less","lib/semantic-ui/src/definitions/collections/form.import.less","lib/semantic-ui/src/definitions/collections/grid.import.less","lib/semantic-ui/src/definitions/collections/menu.import.less","lib/semantic-ui/src/definitions/collections/message.import.less","lib/semantic-ui/src/definitions/collections/table.import.less","lib/semantic-ui/src/definitions/elements/button.import.less","lib/semantic-ui/src/definitions/elements/container.import.less","lib/semantic-ui/src/definitions/elements/divider.import.less","lib/semantic-ui/src/definitions/elements/flag.import.less","lib/semantic-ui/src/definitions/elements/header.import.less","lib/semantic-ui/src/definitions/elements/icon.import.less","lib/semantic-ui/src/definitions/elements/image.import.less","lib/semantic-ui/src/definitions/elements/input.import.less","lib/semantic-ui/src/definitions/elements/label.import.less","lib/semantic-ui/src/definitions/elements/list.import.less","lib/semantic-ui/src/definitions/elements/loader.import.less","lib/semantic-ui/src/definitions/elements/rail.import.less","lib/semantic-ui/src/definitions/elements/reveal.import.less","lib/semantic-ui/src/definitions/elements/segment.import.less","lib/semantic-ui/src/definitions/elements/step.import.less","lib/semantic-ui/src/definitions/modules/accordion.import.less","lib/semantic-ui/src/definitions/modules/accordion.js","lib/semantic-ui/src/definitions/modules/checkbox.import.less","lib/semantic-ui/src/definitions/modules/checkbox.js","lib/semantic-ui/src/definitions/modules/dimmer.import.less","lib/semantic-ui/src/definitions/modules/dimmer.js","lib/semantic-ui/src/definitions/modules/dropdown.import.less","lib/semantic-ui/src/definitions/modules/dropdown.js","lib/semantic-ui/src/definitions/modules/embed.import.less","lib/semantic-ui/src/definitions/modules/embed.js","lib/semantic-ui/src/definitions/modules/modal.import.less","lib/semantic-ui/src/definitions/modules/modal.js","lib/semantic-ui/src/definitions/modules/nag.import.less","lib/semantic-ui/src/definitions/modules/nag.js","lib/semantic-ui/src/definitions/modules/popup.import.less","lib/semantic-ui/src/definitions/modules/popup.js","lib/semantic-ui/src/definitions/modules/progress.import.less","lib/semantic-ui/src/definitions/modules/progress.js","lib/semantic-ui/src/definitions/modules/rating.import.less","lib/semantic-ui/src/definitions/modules/rating.js","lib/semantic-ui/src/definitions/modules/search.import.less","lib/semantic-ui/src/definitions/modules/search.js","lib/semantic-ui/src/definitions/modules/shape.import.less","lib/semantic-ui/src/definitions/modules/shape.js","lib/semantic-ui/src/definitions/modules/sidebar.import.less","lib/semantic-ui/src/definitions/modules/sidebar.js","lib/semantic-ui/src/definitions/modules/sticky.import.less","lib/semantic-ui/src/definitions/modules/sticky.js","lib/semantic-ui/src/definitions/modules/tab.import.less","lib/semantic-ui/src/definitions/modules/tab.js","lib/semantic-ui/src/definitions/modules/transition.import.less","lib/semantic-ui/src/definitions/modules/transition.js","lib/semantic-ui/src/definitions/globals/reset.import.less","lib/semantic-ui/src/definitions/globals/site.import.less","lib/semantic-ui/src/definitions/globals/site.js","lib/semantic-ui/src/definitions/views/ad.import.less","lib/semantic-ui/src/definitions/views/card.import.less","lib/semantic-ui/src/definitions/views/comment.import.less","lib/semantic-ui/src/definitions/views/feed.import.less","lib/semantic-ui/src/definitions/views/item.import.less","lib/semantic-ui/src/definitions/views/statistic.import.less"];
var themes = ["lib/semantic-ui/src/themes/amazon/elements/button.overrides.import.less","lib/semantic-ui/src/themes/amazon/elements/button.variables.import.less","lib/semantic-ui/src/themes/amazon/globals/site.variables.import.less","lib/semantic-ui/src/themes/basic/collections/table.overrides.import.less","lib/semantic-ui/src/themes/basic/collections/table.variables.import.less","lib/semantic-ui/src/themes/basic/elements/button.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/button.variables.import.less","lib/semantic-ui/src/themes/basic/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/icon.variables.import.less","lib/semantic-ui/src/themes/basic/elements/step.overrides.import.less","lib/semantic-ui/src/themes/basic/elements/step.variables.import.less","lib/semantic-ui/src/themes/basic/globals/reset.overrides.import.less","lib/semantic-ui/src/themes/basic/globals/reset.variables.import.less","lib/semantic-ui/src/themes/basic/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/basic/modules/progress.variables.import.less","lib/semantic-ui/src/themes/basic/views/card.overrides.import.less","lib/semantic-ui/src/themes/basic/views/card.variables.import.less","lib/semantic-ui/src/themes/bootstrap3/elements/button.overrides.import.less","lib/semantic-ui/src/themes/bootstrap3/elements/button.variables.import.less","lib/semantic-ui/src/themes/bookish/elements/header.overrides.import.less","lib/semantic-ui/src/themes/bookish/elements/header.variables.import.less","lib/semantic-ui/src/themes/chubby/collections/form.overrides.import.less","lib/semantic-ui/src/themes/chubby/collections/form.variables.import.less","lib/semantic-ui/src/themes/chubby/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/chubby/collections/menu.variables.import.less","lib/semantic-ui/src/themes/chubby/elements/button.overrides.import.less","lib/semantic-ui/src/themes/chubby/elements/button.variables.import.less","lib/semantic-ui/src/themes/chubby/elements/header.overrides.import.less","lib/semantic-ui/src/themes/chubby/elements/header.variables.import.less","lib/semantic-ui/src/themes/chubby/modules/accordion.overrides.import.less","lib/semantic-ui/src/themes/chubby/modules/accordion.variables.import.less","lib/semantic-ui/src/themes/chubby/views/comment.overrides.import.less","lib/semantic-ui/src/themes/chubby/views/comment.variables.import.less","lib/semantic-ui/src/themes/classic/collections/table.overrides.import.less","lib/semantic-ui/src/themes/classic/collections/table.variables.import.less","lib/semantic-ui/src/themes/classic/elements/button.overrides.import.less","lib/semantic-ui/src/themes/classic/elements/button.variables.import.less","lib/semantic-ui/src/themes/classic/elements/header.overrides.import.less","lib/semantic-ui/src/themes/classic/elements/header.variables.import.less","lib/semantic-ui/src/themes/classic/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/classic/modules/progress.variables.import.less","lib/semantic-ui/src/themes/classic/views/card.overrides.import.less","lib/semantic-ui/src/themes/classic/views/card.variables.import.less","lib/semantic-ui/src/themes/colored/modules/checkbox.overrides.import.less","lib/semantic-ui/src/themes/colored/modules/checkbox.variables.import.less","lib/semantic-ui/src/themes/default/collections/breadcrumb.overrides.import.less","lib/semantic-ui/src/themes/default/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/themes/default/collections/form.overrides.import.less","lib/semantic-ui/src/themes/default/collections/form.variables.import.less","lib/semantic-ui/src/themes/default/collections/grid.overrides.import.less","lib/semantic-ui/src/themes/default/collections/grid.variables.import.less","lib/semantic-ui/src/themes/default/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/default/collections/menu.variables.import.less","lib/semantic-ui/src/themes/default/collections/message.overrides.import.less","lib/semantic-ui/src/themes/default/collections/message.variables.import.less","lib/semantic-ui/src/themes/default/collections/table.overrides.import.less","lib/semantic-ui/src/themes/default/collections/table.variables.import.less","lib/semantic-ui/src/themes/default/elements/button.overrides.import.less","lib/semantic-ui/src/themes/default/elements/button.variables.import.less","lib/semantic-ui/src/themes/default/elements/container.overrides.import.less","lib/semantic-ui/src/themes/default/elements/container.variables.import.less","lib/semantic-ui/src/themes/default/elements/divider.overrides.import.less","lib/semantic-ui/src/themes/default/elements/divider.variables.import.less","lib/semantic-ui/src/themes/default/elements/flag.overrides.import.less","lib/semantic-ui/src/themes/default/elements/flag.variables.import.less","lib/semantic-ui/src/themes/default/elements/header.overrides.import.less","lib/semantic-ui/src/themes/default/elements/header.variables.import.less","lib/semantic-ui/src/themes/default/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/default/elements/icon.variables.import.less","lib/semantic-ui/src/themes/default/elements/image.overrides.import.less","lib/semantic-ui/src/themes/default/elements/image.variables.import.less","lib/semantic-ui/src/themes/default/elements/input.overrides.import.less","lib/semantic-ui/src/themes/default/elements/input.variables.import.less","lib/semantic-ui/src/themes/default/elements/label.overrides.import.less","lib/semantic-ui/src/themes/default/elements/label.variables.import.less","lib/semantic-ui/src/themes/default/elements/list.overrides.import.less","lib/semantic-ui/src/themes/default/elements/list.variables.import.less","lib/semantic-ui/src/themes/default/elements/loader.overrides.import.less","lib/semantic-ui/src/themes/default/elements/loader.variables.import.less","lib/semantic-ui/src/themes/default/elements/rail.overrides.import.less","lib/semantic-ui/src/themes/default/elements/rail.variables.import.less","lib/semantic-ui/src/themes/default/elements/reveal.overrides.import.less","lib/semantic-ui/src/themes/default/elements/reveal.variables.import.less","lib/semantic-ui/src/themes/default/elements/segment.overrides.import.less","lib/semantic-ui/src/themes/default/elements/segment.variables.import.less","lib/semantic-ui/src/themes/default/elements/step.overrides.import.less","lib/semantic-ui/src/themes/default/elements/step.variables.import.less","lib/semantic-ui/src/themes/default/globals/reset.overrides.import.less","lib/semantic-ui/src/themes/default/globals/reset.variables.import.less","lib/semantic-ui/src/themes/default/globals/site.overrides.import.less","lib/semantic-ui/src/themes/default/globals/site.variables.import.less","lib/semantic-ui/src/themes/default/views/ad.overrides.import.less","lib/semantic-ui/src/themes/default/views/ad.variables.import.less","lib/semantic-ui/src/themes/default/views/card.overrides.import.less","lib/semantic-ui/src/themes/default/views/card.variables.import.less","lib/semantic-ui/src/themes/default/views/comment.overrides.import.less","lib/semantic-ui/src/themes/default/views/comment.variables.import.less","lib/semantic-ui/src/themes/default/views/feed.overrides.import.less","lib/semantic-ui/src/themes/default/views/feed.variables.import.less","lib/semantic-ui/src/themes/default/views/item.overrides.import.less","lib/semantic-ui/src/themes/default/views/item.variables.import.less","lib/semantic-ui/src/themes/default/views/statistic.overrides.import.less","lib/semantic-ui/src/themes/default/views/statistic.variables.import.less","lib/semantic-ui/src/themes/duo/elements/loader.overrides.import.less","lib/semantic-ui/src/themes/duo/elements/loader.variables.import.less","lib/semantic-ui/src/themes/default/modules/accordion.overrides.import.less","lib/semantic-ui/src/themes/default/modules/accordion.variables.import.less","lib/semantic-ui/src/themes/default/modules/chatroom.overrides.import.less","lib/semantic-ui/src/themes/default/modules/chatroom.variables.import.less","lib/semantic-ui/src/themes/default/modules/checkbox.overrides.import.less","lib/semantic-ui/src/themes/default/modules/checkbox.variables.import.less","lib/semantic-ui/src/themes/default/modules/dimmer.overrides.import.less","lib/semantic-ui/src/themes/default/modules/dimmer.variables.import.less","lib/semantic-ui/src/themes/default/modules/dropdown.overrides.import.less","lib/semantic-ui/src/themes/default/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/default/modules/embed.overrides.import.less","lib/semantic-ui/src/themes/default/modules/embed.variables.import.less","lib/semantic-ui/src/themes/default/modules/modal.overrides.import.less","lib/semantic-ui/src/themes/default/modules/modal.variables.import.less","lib/semantic-ui/src/themes/default/modules/nag.overrides.import.less","lib/semantic-ui/src/themes/default/modules/nag.variables.import.less","lib/semantic-ui/src/themes/default/modules/popup.overrides.import.less","lib/semantic-ui/src/themes/default/modules/popup.variables.import.less","lib/semantic-ui/src/themes/default/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/default/modules/progress.variables.import.less","lib/semantic-ui/src/themes/default/modules/rating.overrides.import.less","lib/semantic-ui/src/themes/default/modules/rating.variables.import.less","lib/semantic-ui/src/themes/default/modules/search.overrides.import.less","lib/semantic-ui/src/themes/default/modules/search.variables.import.less","lib/semantic-ui/src/themes/default/modules/shape.overrides.import.less","lib/semantic-ui/src/themes/default/modules/shape.variables.import.less","lib/semantic-ui/src/themes/default/modules/sidebar.overrides.import.less","lib/semantic-ui/src/themes/default/modules/sidebar.variables.import.less","lib/semantic-ui/src/themes/default/modules/sticky.overrides.import.less","lib/semantic-ui/src/themes/default/modules/sticky.variables.import.less","lib/semantic-ui/src/themes/default/modules/tab.overrides.import.less","lib/semantic-ui/src/themes/default/modules/tab.variables.import.less","lib/semantic-ui/src/themes/default/modules/transition.overrides.import.less","lib/semantic-ui/src/themes/default/modules/transition.variables.import.less","lib/semantic-ui/src/themes/fixed-width/collections/grid.overrides.import.less","lib/semantic-ui/src/themes/fixed-width/collections/grid.variables.import.less","lib/semantic-ui/src/themes/fixed-width/modules/modal.overrides.import.less","lib/semantic-ui/src/themes/fixed-width/modules/modal.variables.import.less","lib/semantic-ui/src/themes/flat/collections/form.overrides.import.less","lib/semantic-ui/src/themes/flat/collections/form.variables.import.less","lib/semantic-ui/src/themes/flat/globals/site.overrides.import.less","lib/semantic-ui/src/themes/flat/globals/site.variables.import.less","lib/semantic-ui/src/themes/github/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/themes/github/collections/form.overrides.import.less","lib/semantic-ui/src/themes/github/collections/form.variables.import.less","lib/semantic-ui/src/themes/github/collections/grid.variables.import.less","lib/semantic-ui/src/themes/github/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/github/collections/menu.variables.import.less","lib/semantic-ui/src/themes/github/collections/message.overrides.import.less","lib/semantic-ui/src/themes/github/collections/message.variables.import.less","lib/semantic-ui/src/themes/github/collections/table.variables.import.less","lib/semantic-ui/src/themes/github/elements/button.overrides.import.less","lib/semantic-ui/src/themes/github/elements/button.variables.import.less","lib/semantic-ui/src/themes/github/elements/header.variables.import.less","lib/semantic-ui/src/themes/github/elements/icon.overrides.import.less","lib/semantic-ui/src/themes/github/elements/icon.variables.import.less","lib/semantic-ui/src/themes/github/elements/image.variables.import.less","lib/semantic-ui/src/themes/github/elements/input.overrides.import.less","lib/semantic-ui/src/themes/github/elements/input.variables.import.less","lib/semantic-ui/src/themes/github/elements/label.overrides.import.less","lib/semantic-ui/src/themes/github/elements/label.variables.import.less","lib/semantic-ui/src/themes/github/elements/segment.overrides.import.less","lib/semantic-ui/src/themes/github/elements/segment.variables.import.less","lib/semantic-ui/src/themes/github/elements/step.overrides.import.less","lib/semantic-ui/src/themes/github/elements/step.variables.import.less","lib/semantic-ui/src/themes/github/globals/site.variables.import.less","lib/semantic-ui/src/themes/github/modules/dropdown.overrides.import.less","lib/semantic-ui/src/themes/github/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/github/modules/popup.variables.import.less","lib/semantic-ui/src/themes/gmail/collections/message.overrides.import.less","lib/semantic-ui/src/themes/gmail/collections/message.variables.import.less","lib/semantic-ui/src/themes/instagram/views/card.overrides.import.less","lib/semantic-ui/src/themes/instagram/views/card.variables.import.less","lib/semantic-ui/src/themes/material/collections/menu.overrides.import.less","lib/semantic-ui/src/themes/material/collections/menu.variables.import.less","lib/semantic-ui/src/themes/material/elements/button.overrides.import.less","lib/semantic-ui/src/themes/material/elements/button.variables.import.less","lib/semantic-ui/src/themes/material/elements/header.overrides.import.less","lib/semantic-ui/src/themes/material/elements/header.variables.import.less","lib/semantic-ui/src/themes/material/globals/site.overrides.import.less","lib/semantic-ui/src/themes/material/globals/site.variables.import.less","lib/semantic-ui/src/themes/material/modules/dropdown.overrides.import.less","lib/semantic-ui/src/themes/material/modules/dropdown.variables.import.less","lib/semantic-ui/src/themes/material/modules/modal.overrides.import.less","lib/semantic-ui/src/themes/material/modules/modal.variables.import.less","lib/semantic-ui/src/themes/pulsar/elements/loader.overrides.import.less","lib/semantic-ui/src/themes/pulsar/elements/loader.variables.import.less","lib/semantic-ui/src/themes/raised/elements/button.overrides.import.less","lib/semantic-ui/src/themes/raised/elements/button.variables.import.less","lib/semantic-ui/src/themes/resetcss/globals/reset.overrides.import.less","lib/semantic-ui/src/themes/resetcss/globals/reset.variables.import.less","lib/semantic-ui/src/themes/round/elements/button.overrides.import.less","lib/semantic-ui/src/themes/round/elements/button.variables.import.less","lib/semantic-ui/src/themes/rtl/globals/site.overrides.import.less","lib/semantic-ui/src/themes/rtl/globals/site.variables.import.less","lib/semantic-ui/src/themes/striped/modules/progress.overrides.import.less","lib/semantic-ui/src/themes/striped/modules/progress.variables.import.less","lib/semantic-ui/src/themes/timeline/views/feed.overrides.import.less","lib/semantic-ui/src/themes/timeline/views/feed.variables.import.less","lib/semantic-ui/src/themes/twitter/elements/button.overrides.import.less","lib/semantic-ui/src/themes/twitter/elements/button.variables.import.less","lib/semantic-ui/src/themes/basic/assets/fonts/icons.eot","lib/semantic-ui/src/themes/basic/assets/fonts/icons.svg","lib/semantic-ui/src/themes/basic/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/basic/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/images/flags.png","lib/semantic-ui/src/themes/default/assets/fonts/icons.eot","lib/semantic-ui/src/themes/default/assets/fonts/icons.svg","lib/semantic-ui/src/themes/default/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff2","lib/semantic-ui/src/themes/github/assets/fonts/octicons-local.ttf","lib/semantic-ui/src/themes/github/assets/fonts/octicons.svg","lib/semantic-ui/src/themes/github/assets/fonts/octicons.ttf","lib/semantic-ui/src/themes/github/assets/fonts/octicons.woff"];
var sites = ["lib/semantic-ui/src/site/collections/breadcrumb.overrides.import.less","lib/semantic-ui/src/site/collections/breadcrumb.variables.import.less","lib/semantic-ui/src/site/collections/form.overrides.import.less","lib/semantic-ui/src/site/collections/form.variables.import.less","lib/semantic-ui/src/site/collections/grid.overrides.import.less","lib/semantic-ui/src/site/collections/grid.variables.import.less","lib/semantic-ui/src/site/collections/menu.overrides.import.less","lib/semantic-ui/src/site/collections/menu.variables.import.less","lib/semantic-ui/src/site/collections/message.overrides.import.less","lib/semantic-ui/src/site/collections/message.variables.import.less","lib/semantic-ui/src/site/collections/table.overrides.import.less","lib/semantic-ui/src/site/collections/table.variables.import.less","lib/semantic-ui/src/site/globals/reset.overrides.import.less","lib/semantic-ui/src/site/globals/reset.variables.import.less","lib/semantic-ui/src/site/globals/site.overrides.import.less","lib/semantic-ui/src/site/globals/site.variables.import.less","lib/semantic-ui/src/site/modules/accordion.overrides.import.less","lib/semantic-ui/src/site/modules/accordion.variables.import.less","lib/semantic-ui/src/site/modules/chatroom.overrides.import.less","lib/semantic-ui/src/site/modules/chatroom.variables.import.less","lib/semantic-ui/src/site/modules/checkbox.overrides.import.less","lib/semantic-ui/src/site/modules/checkbox.variables.import.less","lib/semantic-ui/src/site/modules/dimmer.overrides.import.less","lib/semantic-ui/src/site/modules/dimmer.variables.import.less","lib/semantic-ui/src/site/modules/dropdown.overrides.import.less","lib/semantic-ui/src/site/modules/dropdown.variables.import.less","lib/semantic-ui/src/site/modules/embed.overrides.import.less","lib/semantic-ui/src/site/modules/embed.variables.import.less","lib/semantic-ui/src/site/modules/modal.overrides.import.less","lib/semantic-ui/src/site/modules/modal.variables.import.less","lib/semantic-ui/src/site/modules/nag.overrides.import.less","lib/semantic-ui/src/site/modules/nag.variables.import.less","lib/semantic-ui/src/site/modules/popup.overrides.import.less","lib/semantic-ui/src/site/modules/popup.variables.import.less","lib/semantic-ui/src/site/modules/progress.overrides.import.less","lib/semantic-ui/src/site/modules/progress.variables.import.less","lib/semantic-ui/src/site/modules/rating.overrides.import.less","lib/semantic-ui/src/site/modules/rating.variables.import.less","lib/semantic-ui/src/site/modules/search.overrides.import.less","lib/semantic-ui/src/site/modules/search.variables.import.less","lib/semantic-ui/src/site/modules/shape.overrides.import.less","lib/semantic-ui/src/site/modules/shape.variables.import.less","lib/semantic-ui/src/site/modules/sidebar.overrides.import.less","lib/semantic-ui/src/site/modules/sidebar.variables.import.less","lib/semantic-ui/src/site/modules/sticky.overrides.import.less","lib/semantic-ui/src/site/modules/sticky.variables.import.less","lib/semantic-ui/src/site/modules/tab.overrides.import.less","lib/semantic-ui/src/site/modules/tab.variables.import.less","lib/semantic-ui/src/site/modules/transition.overrides.import.less","lib/semantic-ui/src/site/modules/transition.variables.import.less","lib/semantic-ui/src/site/elements/button.overrides.import.less","lib/semantic-ui/src/site/elements/button.variables.import.less","lib/semantic-ui/src/site/elements/container.overrides.import.less","lib/semantic-ui/src/site/elements/container.variables.import.less","lib/semantic-ui/src/site/elements/divider.overrides.import.less","lib/semantic-ui/src/site/elements/divider.variables.import.less","lib/semantic-ui/src/site/elements/flag.overrides.import.less","lib/semantic-ui/src/site/elements/flag.variables.import.less","lib/semantic-ui/src/site/elements/header.overrides.import.less","lib/semantic-ui/src/site/elements/header.variables.import.less","lib/semantic-ui/src/site/elements/icon.overrides.import.less","lib/semantic-ui/src/site/elements/icon.variables.import.less","lib/semantic-ui/src/site/elements/image.overrides.import.less","lib/semantic-ui/src/site/elements/image.variables.import.less","lib/semantic-ui/src/site/elements/input.overrides.import.less","lib/semantic-ui/src/site/elements/input.variables.import.less","lib/semantic-ui/src/site/elements/label.overrides.import.less","lib/semantic-ui/src/site/elements/label.variables.import.less","lib/semantic-ui/src/site/elements/list.overrides.import.less","lib/semantic-ui/src/site/elements/list.variables.import.less","lib/semantic-ui/src/site/elements/loader.overrides.import.less","lib/semantic-ui/src/site/elements/loader.variables.import.less","lib/semantic-ui/src/site/elements/rail.overrides.import.less","lib/semantic-ui/src/site/elements/rail.variables.import.less","lib/semantic-ui/src/site/elements/reveal.overrides.import.less","lib/semantic-ui/src/site/elements/reveal.variables.import.less","lib/semantic-ui/src/site/elements/segment.overrides.import.less","lib/semantic-ui/src/site/elements/segment.variables.import.less","lib/semantic-ui/src/site/elements/step.overrides.import.less","lib/semantic-ui/src/site/elements/step.variables.import.less","lib/semantic-ui/src/site/views/ad.overrides.import.less","lib/semantic-ui/src/site/views/ad.variables.import.less","lib/semantic-ui/src/site/views/card.overrides.import.less","lib/semantic-ui/src/site/views/card.variables.import.less","lib/semantic-ui/src/site/views/comment.overrides.import.less","lib/semantic-ui/src/site/views/comment.variables.import.less","lib/semantic-ui/src/site/views/feed.overrides.import.less","lib/semantic-ui/src/site/views/feed.variables.import.less","lib/semantic-ui/src/site/views/item.overrides.import.less","lib/semantic-ui/src/site/views/item.variables.import.less","lib/semantic-ui/src/site/views/statistic.overrides.import.less","lib/semantic-ui/src/site/views/statistic.variables.import.less"];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('semantic-ui-data.js', 'server');
  api.export(['semanticUiDataPackage']);

  api.addAssets(definitions, 'server');
  api.addAssets(themes, 'server');
  api.addAssets(sites, 'server');
  api.addAssets('lib/semantic-ui/src/theme.import.less', 'server');
  api.addAssets('lib/semantic-ui/src/semantic.less', 'server');
  api.addAssets('lib/semantic-ui/src/theme.config.import.less', 'server');
});
