# accept-dialog

JQuery UI widget: is a simple "Are you sure you want?" kind of dialog

```html
<div class="dialog-confirm"  id="run-function-dialog" style="display:none;"
  title="Run Function">
  <p>
    <span class="ui-icon ui-icon-alert"></span>
    <span>Are you sure you want to run the function?  </span>
  </p>
</div>
```

```javascript

var initAcceptDialog = {
  acceptFunction : function(that) {
    alert("function create");
  },
  acceptTextButton: "RUN",
  messageSelector : "#run-function-dialog",
  height: 300
};

$("#myButtonAnchor").acceptDialog(initAcceptDialog);
```

In this case when the element "#myButtonAnchor" is clicked the function "acceptFunction" will be executed. By the other hand if cancel is clicked nothing happen.

accept-dialog is a JQuery UI widget

![image](https://raw.githubusercontent.com/troncador/accept-dialog/master/image.png)

## Dependency

jquery-ui
