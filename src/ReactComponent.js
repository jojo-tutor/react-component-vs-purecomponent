import React from 'react'

export default class ReactComponent extends React.Component {
  count = 0
  render() {
    const { id } = this.props
    return (
      <div key={`component_${id}`}>
        <input
          {...this.props}
        />
        <div className='count'>Render Count: <strong>{ this.count ++ }</strong></div>
        <div>Props:</div>
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
        <div><em>*** In this scenario, this will render everytime the parent component render, even though the props of this component <strong>DOES NOT</strong> have changes.</em></div>
      </div>
    )
  }
}
