import React from 'react'

export default class ReactPureComponent extends React.PureComponent {
  count = 0
  render() {
    const { id } = this.props
    return (
      <div key={`purecomponent_${id}`}>
        <input
          {...this.props}
        />
        <div className='count'>Render Count: <strong>{ this.count ++ }</strong></div>
        <div>Props:</div>
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
        <div><em>*** In this scenario, this will <strong>ONLY</strong> render if the props of this pure component changes.</em></div>
      </div>
    )
  }
}
