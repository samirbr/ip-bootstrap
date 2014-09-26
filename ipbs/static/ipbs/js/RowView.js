;(function(define){
'use strict';
 /**
  * The browser-side counterpart to Panel
  *
  * @author Nicholas Bollweg
  * @copyright Nicholas Bollweg 2014
  * @version 0.1.0
  * @license BSD
  */
define([
  'widgets/js/manager',
  'widgets/js/widget',
  'widgets/js/widget_box',
  'jquery',
  'underscore'
],
function(manager, widget, box, $, _){
  var RowView = box.BoxView.extend({
    tagName: 'div',
    className: 'ipbs RowView row',

    render: function(){
        // Called when view is rendered.
        this.$box = this.$el;
        this.update();
        this.update_children([], this.model.get('children'));
        return this;
    }   
  }); // /extend

  // Register the PanelView with the widget manager.
  manager.WidgetManager.register_widget_view(
    'ipbs/RowView',
    RowView
  );
  
  
  // Eventually, requirejs will be used directly: be ready.
  return {
    'ipbs/RowView': RowView
  };
});
}).call(this, this.define);
