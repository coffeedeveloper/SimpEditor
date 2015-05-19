import React from 'react';
import Simditor from 'simditor';
import $ from 'jquery';
import objectAssign from 'object-assign';

class SimpEditor extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.editor = null;
    this.state = {
      className: `simpeditor ${this.props.className}`,
      opts: this.props.opts
    };
  }
  componentDidMount () {
    const textarea = React.findDOMNode(this.refs.textarea);
    this.editor = new Simditor(objectAssign({}, {
      textarea: $(textarea),
      defaultImage: '/content/images/empty.png',
      upload: {
        url: '/uploader/adminEditorImg',
        params: { folder: this.props.fileFolder || 'mailbox' },
        fileKey: 'uploadFile', connectionCount: 3,
        leaveConfirm: '正在上传文件中，如果离开页面将自动取消。',
      },
      pasteImage: true,
    }, this.state.opts));

    if (typeof this.props.children === 'string' && this.props.children) {
      this.setValue(this.props.children);
    }
  }
  componentWillUnmount () {
    this.editor = null;
  }
  getValue () {
    return this.editor.getValue();
  }
  setValue (content) {
    this.editor.setValue(content);
  }
  sync () {
    return this.editor.sync();
  }
  focus () {
    return this.editor.focus();
  }
  blur () {
    return this.editor.blur();
  }
  hidePopover () {
    return this.editor.hidePopover();
  }
  destroy () {
    this.editor.destroy();
  }
  render () {
    return (
      <div className={this.state.className}>
        <textarea ref="textarea"></textarea>
      </div>
    );
  }
}

SimpEditor.defaultProps = {
  className: '',
  opts: {}
};

export default SimpEditor;
