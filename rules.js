import React from 'react'
import Button from './components/Button';
import firebase from 'firebase';
import TextArea from './components/TextArea';
import Input from './components/Input';


class Rules extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rules: []
        };
    }

    componentDidMount() {
        this.getRulesData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state){
            this.writeRulesData();
        }
    }

    writeRulesData = () => {
        firebase.database()
            .ref("rules/")
            .set(this.state);
        console.log("Data Saved");
    };

    getRulesData = () => {
        let ref = firebase.database().ref("rules/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let title = this.refs.title.value;
        let contents = this.refs.contents.value;
        let rid = this.refs.rid.value;

        if (rid && title && contents) {
            const { rules } = this.state;
            const rulesIndex = rules.findIndex(data => {
                return data.rid === rid;
            });
            rules[rulesIndex].title = title;
            rules[rulesIndex].contents = contents;
            this.setState({ rules });
        } else if (title && contents) {
            const rid = new Date().getTime().toString();
            const { rules } = this.state;
            rules.push({ rid, title, contents });
            this.setState({ rules });
        }

        this.refs.title.value = "";
        this.refs.contents.value = "";
        this.refs.rid.value = "";
    };

    removeRule = rule => {
        const { rules } = this.state;
        const newState = rules.filter(data => {
            return data.rid !== rules.rid;
        });
        this.setState({ rules: newState });
    }

    updateRule = rules => {
        this.refs.rid.value = rules.rid;
        this.refs.title.value = rules.title;
        this.refs.contents.value = rules.contents;
    };

    render(){
        const { rules } = this.state;
        return(
            <div>
              <h3>The "Rules" Lawyer's Compendium</h3>
              <h4>For all of you insufferable "know-it-alls"</h4>  
            <div className="rules-container">
                <div>
                    <div className="rules-form">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="hidden" ref="rid"/>
                                <div>
                                    <Input
                                        title={"Rules Editor"}
                                        ref={"title"}
                                        placeholder={"Title"}
                                      />
                                </div>
                                <div>
                                    <TextArea 
                                        type={"text"}
                                        ref={"contents"}
                                        placeholder={"Type till your fingers bleed muahahaha!"}
                                        rows={10} cols={80}
                                      />
                                </div>
                            </div>
                            <Button 
                                action={this.handleSubmit}
                                type={"submit"}
                                title={"Save"}
                                />
                        </form>
                    </div> 
                    <div className="rules-row" >
                        <div className="rules-card">
                            {rules.map(rule => (
                                <div key={rule.rid}>
                                    <div className="rules-border">
                                        <h2>{rule.title}</h2><h5>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(rule.rid)}</h5>
                                        <p>{rule.contents}</p>
                                        <Button action={() => this.removeRule(rule)} title={"Delete"}/>
                                        <Button action={() => this.updateRule(rule)} title={"Edit"} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Rules