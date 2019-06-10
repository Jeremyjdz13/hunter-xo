import React from 'react';
import Input from './Input';
import Button from './Button';

class DiceRoller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Roller: {
            intuition: 0,
            alertness: 0,
            instinct: 0,
            },
            count: 0
        };
        this.handleClickD10 = this.handleClickD10.bind(this);
        this.handleClickD100 = this.handleClickD100.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSubtract = this.handleClickSubtract.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }

    handleInput(e){
        let value = e.target.value;
        let name = e.target.name
        this.setState( 
            prevState => ({
              Roller: {
                ...prevState.Roller, 
                [name]: value
                }
            }),
          );  
    }

    handleClickD10(){

       let rTimer = setInterval(()=>{
           let baseRank = this.state.Roller.intuition;
           let alert = this.state.Roller.alertness;
           let inst = this.state.Roller.instinct;
           let roll = Math.floor((Math.random() * 10) +1)
           let total = parseInt(roll) + parseInt(baseRank) + parseInt(alert) + parseInt(inst);
            this.setState({ 
                randomD10: total,
                D10Roll: roll
            });
        }, 100)

        setTimeout(()=>{
            clearInterval(rTimer);
        }, 2000);
    }
    
    handleClickD100(){
        let rTimer = setInterval(()=>{
            let modifiers = this.state.count;
            let roll = Math.floor((Math.random() * 100) +1)
            let total = parseInt(modifiers) + parseInt(roll);
            this.setState({ 
                randomD100: total,
                D100Roll: roll
            });
        }, 100)

        setTimeout(()=>{
            clearInterval(rTimer);
        }, 2000);
    }

    handleClickAdd(e){
        let add = e.target.name;

        if (add === "5"){
            this.setState({
                count: this.state.count + 5
            }); 
        }
        if (add === "1"){
            this.setState({
                count: this.state.count + 1
            }); 
        }
        if (add === "20"){
            this.setState({
                count: this.state.count + 20
            }); 
        }
    };

    handleClickSubtract(e){
        let subtract = e.target.name;

        if (subtract === "-5"){
            this.setState({
                count: this.state.count - 5
            }); 
        }
        if (subtract === "-3"){
            this.setState({
                count: this.state.count - 3
            }); 
        }
        if (subtract === "-1"){
            this.setState({
                count: this.state.count - 1
            }); 
        }
    }

    handleClickReset(){
        this.setState({
            count: 0
        });
    };



    render(){
        return(
            <div>
                <h3>Dice Roller</h3>
            <div className="dice-roller-container">
                <div className="dice-titles">D10</div>
                  <div className="row">
                    <div>
                        <Input type={'number'} title={'Intuition'} name={'intuition'} value={this.state.Roller.intuition} placeholder={'0'} handleChange={this.handleInput}/> {" "}
                        <Input type={'number'} title={'Alertness'} name={'alertness'} value={this.state.Roller.alertness} placeholder={'0'} handleChange={this.handleInput}/> {" "}
                        <Input type={'number'} title={'Instinct'} name={'instinct'} value={this.state.Roller.instinct} placeholder={'0'} handleChange={this.handleInput}/> {" "}
                    </div>
                    <div>
                        <div className="big-roll">{this.state.randomD10}</div>
                    </div>
                  </div>       
                <div className="row"><Button action={this.handleClickD10.bind(this)} title={'D10'}/><div className="result-titles">Result:</div> <div className="result-boxes">D10: {this.state.D10Roll} | Total: {this.state.randomD10}</div></div>
                
                <div className="dice-modifiers-container">
                <div className="dice-titles">D100</div>
                    <div className="modifier-row">
                        <div>  
                            <div className="result-titles">Modifiers</div>
                            <div className="modifier-box">{this.state.count}</div>
                            <div><Button action={this.handleClickReset} title={"Reset"} /></div>
                        </div>
                        <div>
                            <div className="big-D100roll">{this.state.randomD100}</div>
                        </div>    
                    </div>  
                      <div>
                        <Button name={"20"} action={this.handleClickAdd} title={"+ 20"} /> 
                        <Button name={"5"} action={this.handleClickAdd} title={"+ 5"} /> 
                        <Button name={"1"} action={this.handleClickAdd} title={"+ 1"} /> <br />
                        <Button name={"-5"} action={this.handleClickSubtract} title="- 5" />
                        <Button name={"-3"} action={this.handleClickSubtract} title={"- 3"} />
                        <Button name={"-1"} action={this.handleClickSubtract} title={"- 1"} />
                      </div>
                </div>
                            
                <div className="row">
                    <div>
                        <Button action={this.handleClickD100.bind(this)} title={"D100"} />
                    </div> 
                    <div className="result-titles">Result:</div>
                    <div className="result-boxes">D100: {this.state.D100Roll} | Total: {this.state.randomD100}</div>
                </div>
            </div>
            </div>
        );
    }
}

export default DiceRoller