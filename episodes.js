import React from 'react'
import Button from './components/Button';
import firebase from 'firebase';
import TextArea from './components/TextArea';
import Input from './components/Input';


class Episodes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: []
        };
    }

    componentDidMount() {
        this.getEpisodeData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state){
            this.writeEpisodeData();
        }
    }

    writeEpisodeData = () => {
        firebase.database()
            .ref("episodes/")
            .set(this.state);
        console.log("Data Saved");
    };

    getEpisodeData = () => {
        let ref = firebase.database().ref("episodes/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let title = this.refs.title.value;
        let highlights = this.refs.highlights.value;
        let eid = this.refs.eid.value;

        if (eid && title && highlights) {
            const { episodes } = this.state;
            const episodeIndex = episodes.findIndex(data => {
                return data.eid === eid;
            });
            episodes[episodeIndex].title = title;
            episodes[episodeIndex].highlights = highlights;
            this.setState({ episodes });
        } else if (title && highlights) {
            const eid = new Date().getTime().toString();
            const { episodes } = this.state;
            episodes.push({ eid, title, highlights });
            this.setState({ episodes });
        }

        this.refs.title.value = "";
        this.refs.highlights.value = "";
        this.refs.eid.value = "";
    };

    removeEpisode = episode => {
        const { episodes } = this.state;
        const newState = episodes.filter(data => {
            return data.eid !== episodes.eid;
        });
        this.setState({ episodes: newState });
    }

    updateEpisode = episodes => {
        this.refs.eid.value = episodes.eid;
        this.refs.title.value = episodes.title;
        this.refs.highlights.value = episodes.highlights;
    };

    render(){
        const { episodes } = this.state;
        
        return(
            <div>
              <h3>Episodes</h3>
              <h4>Who said what???</h4>  
            <div className="episodes-container">
                <div>
                    <div className="episode-form">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="hidden" ref="eid"/>
                                <div>
                                    <Input
                                        title={"Episode Editor"}
                                        ref={"title"}
                                        placeholder={"Title"}
                                      />
                                </div>
                                <div>
                                    <TextArea 
                                        type={"text"}
                                        ref={"highlights"}
                                        placeholder={"Type episode highlights here"}
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
                    <div className="episode-row" >
                        <div className="episode-card">
                            {episodes.map(episode => (
                                <div key={episode.eid}>
                                    <div className="episode-border">
                                        <h2>{episode.title}</h2><h5>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(episode.eid)}</h5>
                                        <p>{episode.highlights}</p>
                                        <Button action={() => this.removeEpisode(episode)} title={"Delete"}/>
                                        <Button action={() => this.updateEpisode(episode)} title={"Edit"} />
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

export default Episodes