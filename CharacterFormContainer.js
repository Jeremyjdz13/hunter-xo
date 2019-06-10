import React, { Component } from 'react';  
import Input from './components/Input';  
import TextArea from './components/TextArea';
import Button from './components/Button'; 
import firebase from 'firebase';

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {
      characterEntries: []

    };
  }

  componentDidMount(){
    this.getCharacterEntry();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state){
      this.writeCharacterEntry();
    }
  }

  writeCharacterEntry = (e) => {
    firebase.database()
      .ref("characterEntries/")
      .set(this.state);
    console.log("Data Saved")
  };

   getCharacterEntry = () =>{
    let ref = firebase.database().ref("characterEntries/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let characterName = this.refs.characterName.value;
    let fight = this.refs.fight.value;
    let agility = this.refs.agility.value;
    let strength = this.refs.strength.value;
    let endurance = this.refs.endurance.value;
    let reason = this.refs.reason.value;
    let intuition = this.refs.intuition.value;
    let psyche = this.refs.psyche.value;
    let power1 = this.refs.power1.value;
    let power2 = this.refs.power2.value;
    let power3 = this.refs.power3.value;
    let power4 = this.refs.power4.value;
    let power5 = this.refs.power5.value;
    let powerStunts = this.refs.powerStunts.value;
    let combat = this.refs.combat.value;
    let physical = this.refs.physical.value;
    let professional = this.refs.professional.value;
    let mental = this.refs.mental.value;
    let infamy = this.refs.infamy.value;
    let acclaim = this.refs.acclaim.value;
    let backgrounds = this.refs.backgrounds.value;
    let merits = this.refs.merits.value;
    let flaws = this.refs.flaws.value;
    let nature = this.refs.nature.value;
    let alias = this.refs.alias.value;
    let experience = this.refs.experience.value;
    let karma = this.refs.karma.value;
    let protonium = this.refs.protonium.value;
    let bashing = this.refs.bashing.value;
    let lethal = this.refs.lethal.value;
    let notes = this.refs.notes.value;
    let armor = this.refs.armor.value;
    let cid = this.refs.cid.value;

    if (cid && characterName && bashing && lethal && nature && alias && armor && fight && agility && strength && endurance && reason && intuition && psyche && power1 && power2 && power3 && power4 && power5 && powerStunts && combat && physical && professional && mental && infamy && acclaim && backgrounds && merits && flaws && experience && karma && protonium && notes) {
        const { characterEntries } = this.state;
        const charEntryIndex = characterEntries.findIndex(data => {
            return data.cid === cid;
        });
        characterEntries[charEntryIndex].characterName = characterName;
        characterEntries[charEntryIndex].fight = fight;
        characterEntries[charEntryIndex].agility = agility;
        characterEntries[charEntryIndex].strength = strength;
        characterEntries[charEntryIndex].endurance = endurance;
        characterEntries[charEntryIndex].reason = reason;
        characterEntries[charEntryIndex].intuition = intuition;
        characterEntries[charEntryIndex].psyche = psyche;
        characterEntries[charEntryIndex].power1 = power1;
        characterEntries[charEntryIndex].power2 = power2;
        characterEntries[charEntryIndex].power3 = power3;
        characterEntries[charEntryIndex].power4 = power4;
        characterEntries[charEntryIndex].power5 = power5;
        characterEntries[charEntryIndex].powerStunts = powerStunts;
        characterEntries[charEntryIndex].nature = nature;
        characterEntries[charEntryIndex].alias = alias;
        characterEntries[charEntryIndex].combat = combat;
        characterEntries[charEntryIndex].physical = physical;
        characterEntries[charEntryIndex].professional = professional;
        characterEntries[charEntryIndex].mental = mental;
        characterEntries[charEntryIndex].infamy = infamy;
        characterEntries[charEntryIndex].acclaim = acclaim;
        characterEntries[charEntryIndex].backgrounds = backgrounds;
        characterEntries[charEntryIndex].merits = merits;
        characterEntries[charEntryIndex].flaws = flaws;
        characterEntries[charEntryIndex].experience = experience;
        characterEntries[charEntryIndex].karma = karma;
        characterEntries[charEntryIndex].protoninum = protonium;
        characterEntries[charEntryIndex].bashing = bashing;
        characterEntries[charEntryIndex].lethal = lethal;
        characterEntries[charEntryIndex].notes = notes;
        characterEntries[charEntryIndex].armor = armor;
        this.setState({ characterEntries });
    } else if (characterName && bashing && lethal && nature && alias && armor && fight && agility && strength && endurance && reason && intuition && psyche && power1 && power2 && power3 && power4 && power5 && powerStunts && combat && physical && professional && mental && infamy && acclaim && backgrounds && merits && flaws && experience && karma && protonium && notes) {
        const cid = new Date().getTime().toString();
        const { characterEntries } = this.state;
        characterEntries.push({ cid, armor, bashing, lethal, characterName, fight, agility, strength, endurance, reason, intuition, psyche, power1, power2, power3, power4, power5, powerStunts, combat, physical, professional, mental, infamy, acclaim, backgrounds, merits, flaws, experience, karma, protonium, notes, nature, alias });
        this.setState({ characterEntries });
    }

    this.refs.cid.value = "";
    this.refs.characterName.value = "";
    this.refs.fight.value = "";
    this.refs.agility.value = "";
    this.refs.strength.value = "";
    this.refs.endurance.value = "";
    this.refs.reason.value = "";
    this.refs.intuition.value = "";
    this.refs.psyche.value = "";
    this.refs.power1.value = "";
    this.refs.power2.value = "";
    this.refs.power3.value = "";
    this.refs.power4.value = "";
    this.refs.power5.value = "";
    this.refs.powerStunts.value = "";
    this.refs.combat.value = "";
    this.refs.physical.value = "";
    this.refs.professional.value = "";
    this.refs.mental.value = "";
    this.refs.infamy.value = "";
    this.refs.acclaim.value = "";
    this.refs.backgrounds.value = "";
    this.refs.merits.value = "";
    this.refs.flaws.value = "";
    this.refs.experience.value = "";
    this.refs.nature.value = "";
    this.refs.alias.value = "";
    this.refs.karma.value = "";
    this.refs.protonium.value = "";
    this.refs.bashing.value = "";
    this.refs.lethal.value = "";
    this.refs.notes.value = "";
    this.refs.armor.value = "";
    
};

removeCharacterEntry = characterEntry => {
  const { characterEntries } = this.state;
  const newState = characterEntries.filter(data => {
      return data.cid !== characterEntries.cid;
  });
  this.setState({ characterEntries: newState });
}

updateCharacterEntry = characterEntries => {
  this.refs.cid.value = characterEntries.cid;
  this.refs.characterName.value = characterEntries.characterName;
  this.refs.fight.value = characterEntries.fight;
  this.refs.agility.value = characterEntries.agility;
  this.refs.strength.value = characterEntries.strength;
  this.refs.endurance.value = characterEntries.endurance;
  this.refs.reason.value = characterEntries.reason;
  this.refs.intuition.value = characterEntries.intuition;
  this.refs.psyche.value = characterEntries.psyche;
  this.refs.power1.value = characterEntries.power1;
  this.refs.power2.value = characterEntries.power2;
  this.refs.power3.value = characterEntries.power3;
  this.refs.power4.value = characterEntries.power4;
  this.refs.power5.value = characterEntries.power5;
  this.refs.powerStunts.value = characterEntries.powerStunts;
  this.refs.combat.value = characterEntries.combat;
  this.refs.physical.value = characterEntries.physical;
  this.refs.professional.value = characterEntries.professional;
  this.refs.mental.value = characterEntries.mental;
  this.refs.infamy.value = characterEntries.infamy;
  this.refs.acclaim.value = characterEntries.acclaim;
  this.refs.nature.value = characterEntries.nature;
  this.refs.alias.value = characterEntries.alias;
  this.refs.backgrounds.value = characterEntries.backgrounds;
  this.refs.merits.value = characterEntries.merits;
  this.refs.flaws.value = characterEntries.flaws;
  this.refs.experience.value = characterEntries.experience;
  this.refs.karma.value = characterEntries.karma;
  this.refs.protonium.value = characterEntries.protonium;
  this.refs.bashing.value = characterEntries.bashing;
  this.refs.lethal.value = characterEntries.lethal;
  this.refs.notes.value = characterEntries.notes;
  this.refs.armor.value = characterEntries.armor;
};


  render() {
   const { characterEntries } = this.state;
    return (
        <div className="character-container">
  
          <div className="saved-character-container">
            <div>
              Saved Characters
            </div>
            <div className="character-card row">
                {characterEntries.map(characterEntry => (
                  <div key={characterEntry.cid}>
                    <div>
                      <div className="character-card-title">{characterEntry.characterName}</div>
                      <h5>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(characterEntry.cid)}</h5>
                      <Button action={() => this.removeCharacterEntry(characterEntry)} title={"Delete"}/>
                      <Button action={() => this.updateCharacterEntry(characterEntry)} title={"Load"} />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
          <Input type={'text'} title={'Character Name'} ref={"characterName"} name={'characterName'}  placeholder={'Enter Characters Name'} handleChange={this.handleInput}/> {" "}
             <div className="attributes-container">
             <input type="hidden" ref="cid"/>
              <div className="attributes-section">
                <Input type={'number'} title={'Fight'} ref={'fight'} name={'fight'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Agility'} ref={'agility'} name={'agility'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Strength'} ref={'strength'} name={'strength'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Endurance'} ref={'endurance'} name={'endurance'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Reason'} ref={'reason'} name={'reason'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Intuition'} ref={'intuition'} name={'intuition'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Psyche'} ref={'psyche'} name={'psyche'}  placeholder={'0'} /> {" "}
              </div>
              <div className="attributes-section">
                <Input type={'text'} title={'Nature'}   ref={'nature'} name={'nature'}  placeholder={"Nature"} />
                <Input type={'text'} title={'Alias'}   ref={'alias'} name={'alias'}  placeholder={"Alia"} />
                <Input type={'number'} title={'Acclaim'} ref={'acclaim'} name={'acclaim'}  placeholder={'0'}  /> {" "}
                <Input type={'number'} title={'Infamy'} ref={'infamy'} name={'infamy'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Karma'} ref={'karma'} name={'karma'}  placeholder={'0'} /> {" "}
                <Input type={'number'} title={'Experience'}   ref={'experience'} name={'experience'} placeholder={"Experience"} />
                <Input type={'number'} title={'Protonium'}   ref={'protonium'} name={'protonium'}  placeholder={"Protonium"} />
              </div>
              <div>
                <div className="row">
                  <TextArea type={'text'} rows={7} cols={15} title={'Backgrounds'}  ref={'backgrounds'} name={'backgrounds'}  placeholder={"Backgrounds"} />
                  <TextArea type={'text'} rows={7} cols={15} title={'Merits'}  ref={'merits'} name={'merits'} placeholder={"Merits"} />
                  <TextArea type={'text'} rows={7} cols={15} title={'Flaws'}  ref={'flaws'} name={'flaws'}  placeholder={"Flaws"} />
                </div>
                <div className="skills-container">
                  <div>
                    <TextArea title={'Combat'} rows={7} cols={15}  ref={'combat'} name={'combat'}  placeholder={"Enter combat skills."} />
                    <TextArea title={'Physical'} rows={7} cols={15}  ref={'physical'} name={'physical'}  placeholder={"Enter physical skills."} />
                  </div>
                  <div>
                    <TextArea title={'Professional'} rows={7} cols={15}  ref={'professional'} name={'professional'}  placeholder={"Enter professional skills."} />
                    <TextArea title={'Mental'} rows={7} cols={15}  ref={'mental'} name={'mental'}  placeholder={"Enter mental skills."} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="powers-container">
              <div>        
                <Input type={'text'} title={'Power 1'} ref={'power1'} name={'power1'}  placeholder={'name of power'} /> {" "}
                <Input type={'text'} title={'Power 2'} ref={'power2'} name={'power2'}  placeholder={'name of power'} /> {" "}
                <Input type={'text'} title={'Power 3'} ref={'power3'} name={'power3'}  placeholder={'name of power'} /> {" "}
                <Input type={'text'} title={'Power 4'} ref={'power4'} name={'power4'}  placeholder={'name of power'} /> {" "}
                <Input type={'text'} title={'Power 5'} ref={'power5'} name={'power5'}  placeholder={'name of power'} /> {" "}
              </div>
              <div>
                <TextArea type={'text'} title={'Power Stunts'} rows={20} cols={80} ref={'powerStunts'} name={'powerStunts'}  placeholder={'Use this area for powerstunts'} />
              </div>
            </div>
            <div>
              <div className="row"> 
                  <Input type={'number'} title={'Bashing Damage'} ref={'bashing'} name={'bashing'} placeholder={'0'}  /> {" "}
                  <Input type={'number'} title={'Lethal Damage'} ref={'lethal'} name={'lethal'} placeholder={'0'} /> {" "} 
                  <Input type={'number'} title={'Armor Bonus'} ref={'armor'} name={'armor'}  placeholder={'armor rating'} /> {" "}
              </div>    
              <TextArea title={'Character Notes'} rows={10} cols={80}  ref={'notes'} name={'notes'} placeholder={"Use this area for notes."} />
              <Button action={this.handleFormSubmit} type={"primary"} title={"Save"}  />
            </div> 
      </form>
     </div>   
    );
  }
};


export default FormContainer;
