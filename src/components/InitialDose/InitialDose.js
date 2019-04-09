import React, { Component } from 'react';

class InitialDose extends Component {
   constructor(props) {
      super(props);

      this.state = {
         goalAuc: 400,
         crcl: 0,
         tbw: 0,
         age: 0,
         scr: 0,
         cns: 0,
         obese: 0
      };
   }

   handleRadioChange = (event) => {
      this.setState({ [event.target.name]: Number(event.target.value) });
   }

   handleChangeNumber = (event) => {
      this.setState({ [event.target.id]: Number(event.target.value) });
   }

   render() {
      return (
         <div>
            <div>
               Estimate AUC-targeted initial maintenance dosing regimen based on patient characteristics.
            </div>

            <div>
               <span className="label" htmlFor="goalAuc">Chosen goal AUC<sub>24</sub></span>
               <input type="number" id="goalAuc" value={this.state.goalAuc} onChange={this.handleChangeNumber}></input>
            </div>

            <div>
               <span className="label" htmlFor="tbw">Total body weight (kg)</span>
               <input type="number" id="tbw" value={this.state.tbw} onChange={this.handleChangeNumber}></input>
            </div>

            <div>
               <span className="label">Age</span>
               <input type="number" id="age" value={this.state.age} onChange={this.handleChangeNumber}></input>
            </div>

            <div>
               <span className="label">SCr</span>
               <input type="number" id="scr" value={this.state.scr} onChange={this.handleChangeNumber}></input>
            </div>

            <div>
               <span className="label" htmlFor="sex">Sex</span>
               <form id="sex">
                  <label>
                     <input
                        type="radio"
                        name="sex"
                        value="1"
                        checked={this.state.sex === 1}
                        onChange={this.handleRadioChange}
                     />
                     Male
                     </label>
                  <label>
                     <input
                        type="radio"
                        name="sex"
                        value="0"
                        checked={this.state.sex === 0}
                        onChange={this.handleRadioChange}
                     />
                     Female
                     </label>
               </form>
            </div>

            <div>
               <span className="label" htmlFor="crcl">CrCl (ml/min)</span>
               <input type="number" id="crcl" value={this.state.crcl} onChange={this.handleChangeNumber}></input>
            </div>
            
            <div>
               <span className="label" htmlFor="cns">CNS infection?</span>
               <form id="cns">
                  <label>
                     <input
                        type="radio"
                        name="cns"
                        value="1"
                        checked={this.state.cns === 1}
                        onChange={this.handleRadioChange}
                     />
                     yes
                  </label>
                  <label>
                     <input
                        type="radio"
                        name="cns"
                        value="0"
                        checked={this.state.cns === 0}
                        onChange={this.handleRadioChange}
                     />
                     no
                  </label>
               </form>
            </div>

            <div>
               <span className="label" htmlFor="obese">Obese: BMI &ge; 30?</span>
               <form id="obese">
                  <label>
                     <input
                        type="radio"
                        name="obese"
                        value="1"
                        checked={this.state.obese === 1}
                        onChange={this.handleRadioChange}
                     />
                     yes
                  </label>
                  <label>
                     <input
                        type="radio"
                        name="obese"
                        value="0"
                        checked={this.state.obese === 0}
                        onChange={this.handleRadioChange}
                     />
                     no
                  </label>
               </form>
            </div>
         </div>
      );
   }
}

export default InitialDose;