import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: 15,
      payment: ''
    };
    this.handleBalance = this.handleBalance.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBalance(e) {
    this.setState({
      balance: e.target.value
    });
  }

  handleRate(e) {
    this.setState({
      rate: e.target.value
    });
  }

  handleTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleClick() {
    const b = this.state.balance;
    const r = (this.state.rate * 0.01) / 12;
    const t = this.state.term;
    const n = t * 12;

    const num = Math.pow(r + 1, n) * r;
    const den = Math.pow(r + 1, n) - 1;

    const payment = ((num / den) * b).toFixed(2);

    this.setState({
      payment: payment
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <h3>Mortgage Calculator</h3>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <h5>Loan Balance</h5>
            </div>
            <div className='col-md-10'>
              <input name='balance' type='number' className='form-control mb-3' onChange={ this.handleBalance } />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <h5>Interest Rate (%)</h5>
            </div>
            <div className='col-md-10'>
              <input name='rate' type='number' className='form-control mb-3' onChange={ this.handleRate } />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <h5>Loan Term (years)</h5>
            </div>
            <div className='col-md-10'>
              <select name='term' className='form-control mb-3' value={ this.state.value } onChange={ this.handleTerm }>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 offset-md-2'>
              <button name='submit' className='btn btn-primary mb-3' onClick={ this.handleClick }>Calculate</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10 offset-md-2'>
              <div id='output'>${ this.state.payment } is your payment.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
