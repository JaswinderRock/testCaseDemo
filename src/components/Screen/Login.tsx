import React from 'react';

type TypeProps = {}
type TypeState = {
    email: string,
    password: string,
    remeberMe: boolean,
}
class Login extends React.Component<TypeProps, TypeState> {
    constructor(props: TypeProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remeberMe: true,
        }
    }

    render() {
        const { email, password, remeberMe } = this.state;
        return (
            <div className='wrapper-div' style={{ display: 'flex' }}>
                <form className="login-form" onSubmit={this.onSubmit} style={{ margin: 'auto', padding: '40px', marginTop: '50px', background: '#dadada', border: '2px solid #0000FF ', color: 'blue' }}>
                    <h3 className='Login-label' style={{ fontSize: '24px' }} id='test-id-login'>Login</h3>
                    <div className='email-wrapper'>
                        <label style={{ fontSize: '20px' }}>Email *</label>
                        <br />
                        <input
                            className='email-input'
                            id='data-test-email'
                            style={{ marginTop: '10px', height: '3vh' }}
                            placeholder='Please enter  your email'
                            type='email'
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <br />
                    <div>
                        <label style={{ fontSize: '20px' }}>Password *</label>
                        <br />
                        <input
                            className='password-input'
                            style={{ marginTop: '10px', height: '3vh' }}
                            placeholder='Please enter your password'
                            type='password'
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <br />
                    <div className='wrapper-checkbox'>
                        <label >
                            <input
                                type='checkbox'
                                checked={remeberMe}
                                onChange={e => this.setState({ remeberMe: e.target.checked })}
                            />
                            Remeber me ?
                        </label>
                    </div>
                    <br />
                    <div>
                        <button type='submit' className="submit-button" style={{ color: 'white', background: 'blue', marginTop: '16px', height: '5vh', width: '60%' }}>Submit</button>
                    </div>
                </form>
                {/* <div>{this.state.email}</div> */}
            </div>
        )
    }

    validateForm = () => {
        const { email, password } = this.state
        let status = true;
        if (email.length === 0) {
            status = false;
        }
        if (password.length === 0) {
            status = false;
        }
        return status;
    }
    onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationStatus = this.validateForm();

        if (validationStatus === false) {
            alert('Plase fill all the required fields')
        }
        console.log(this.state);
    }

}
export default Login;