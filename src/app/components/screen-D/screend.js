import React from 'react'
import {} from 'react'

export class ScreenD extends React.Component{
    
    constructor(props){
        super()
            this.state = {
                 license: '',
                 companyAddress: '',
                 entityName: '',
                 companyWebsite: '',
                 regAsset: '',
                 establishDate: '',
                 bankName: '',
                 bankAccountNumber: ''
            }
        }

    styles = {
        lineInput: {
            border: 'none',
            'borderBottom': '1px solid black',
            'borderRadius': 0,
            'boxShadow': 'none'
        },

        customFormGroup: {
            padding: '5px 10px'
        },

        customLabel: {
            'marginBottom': '0px'
        },
        submitButton: {
            width: '90%',
            margin: '0 auto'
        }
    }
    
    handleLicenseChange = e => this.setState({license: e.target.value})
    handlecompanyAddressChange = e => this.setState({companyAddress: e.target.value})
    handleEntityNameChange = e => this.setState({entityName: e.target.value})
    handleCompnayWebsiteChange = e => this.setState({companyWebsite: e.target.value})
    handleResAssetChange = e => this.setState({regAsset: e.target.value})
    handleEstablishDateChange =  e => this.setState({establishDate: e.target.value})
    handleBankNameChange = e => this.setState({bankName: e.target.value})
    handlebankAccountNumberChange = e => this.setState({bankAccountNumber: e.target.value})

    getFormValues(){
        console.log(JSON.stringify(this.state))
    }
    render(){
        return (
            <div>
                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>LICENSE REG NUMBER</label>
                    <input type="text"  style={this.styles.lineInput} value={this.state.license} onChange={this.handleLicenseChange.bind(this)} className="form-control" />
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>ADDRESS</label>
                    <input  type="text" style={this.styles.lineInput} className="form-control"  value={this.state.companyAddress} onChange={this.handlecompanyAddressChange.bind(this)}/>
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>ENTITY NAME</label>
                    <input type="text"  style={this.styles.lineInput} className="form-control"  value={this.state.entityName} onChange={this.handleEntityNameChange.bind(this)}/>
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>COMPANY WEBSITE</label>
                    <input type="text" style={this.styles.lineInput} className="form-control" value={this.state.companyWebsite} onChange={this.handleCompnayWebsiteChange.bind(this)}/>
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>LICENSE REG NUMBER</label>
                    <input type="text" style={this.styles.lineInput} className="form-control"  value={this.state.regAsset} onChange={this.handleResAssetChange.bind(this)}/>
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>COMPANY ESTABLISH DATE</label>
                    <input type="text" style={this.styles.lineInput} className="form-control" value={this.state.establishDate} onChange={this.handleEstablishDateChange.bind(this)}/>
                </div>
                
                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>COMPANY BANK NAME</label>
                    <input type="text" style={this.styles.lineInput} className="form-control" value={this.state.bankName} onChange={this.handleBankNameChange.bind(this)}/>
                </div>

                <div className="form-group" style={this.styles.customFormGroup}>
                    <label  style={this.styles.customLabel}>COMPANY BANK ACCOUNT NUMBER</label>
                    <input type="text" style={this.styles.lineInput} className="form-control" value={this.state.bankAccountNumber} onChange={this.handlebankAccountNumberChange.bind(this)}/>
                </div>

                <button className="btn-block btn btn-primary btn-outline" style={this.styles.submitButton} onClick={()=> this.getFormValues()}>SUBMIT</button>
            </div>
        )
    }
}
