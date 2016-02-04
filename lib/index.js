var React = require('react');

var FileInput = React.createClass({
  getInitialState: function() {
    return {
      value: '',
      styles: {
        parent: {
          position: 'relative'
        },
        file: {
          position: 'absolute',
          top: 0,
          left: 0,
           opacity: 0,
          width: '100%',
          zIndex: 1
        },
        text: {
          position: 'relative',
          zIndex: -1,
          margin: '5',
          width: '200',
          background: '#443b5d',
          fontFamily: ['Lato', 'sans-serif'],
          fontSize: 14,
          color: '#fff'
        }
      }
    };
  },

  handleChange: function(e) {
    this.props.onChange(e.target.files[0]);
  },

  render: function() {
    return React.DOM.div({
        style: this.state.styles.parent
      },

      React.DOM.image({
        src: this.props.thumbImage,
        style: this.props.thumbImageStyle
      }),

      // Actual file input
      React.DOM.input({
        type: 'file',
        name: this.props.name,
        className: this.props.className,
        onChange: this.handleChange,
        disabled: this.props.disabled,
        accept: this.props.accept,
        style: this.state.styles.file
      }),

      // Emulated file input
      React.DOM.input({
        type: 'text',
        tabIndex: -1,
        name: this.props.name + '_filename',
        value: this.state.value,
        className: this.props.className,
        onChange: function() {},
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        style: this.props.style,
        //style: this.state.styles.text
      },

      React.DOM.image({
        src: './images/1x1.png',
        style: this.props.thumbImageStyle
      })

      ));
  }
});

module.exports = FileInput;
