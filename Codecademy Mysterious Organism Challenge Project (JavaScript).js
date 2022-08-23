// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate() {
        const dnaBases = ['A', 'T', 'C', 'G']
        let randomNum = Math.floor(Math.random() * 15)
        for (let i=0; i<dnaBases.length; i++){
          if (dnaBases[i]== this.dna[randomNum]){
           do{
              this.dna[randomNum] = returnRandBase()
            }
          while(dnaBases[i]!= this.dna[randomNum]);          
        }
      return this.dna;
    }},compareDNA(pAequor){
      let counter = 0;
      for (let i=0; i<this.dna.length; i++){
        if (pAequor.dna[i]==this.dna[i]){
          counter++
        }
    }
      let percentage = ((counter/15)*100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
    },willLikelySurvive(){
      let newcounter = 0;
      for (let i=0; i<this.dna.length;i++) {
        if (this.dna[i]=="C"||this.dna[i]=="G"){
            newcounter++
        }
      } let newPercentage = ((newcounter/15)*100).toFixed(2);
        if (newPercentage>=60){
          return true
        }else {
          return false
        }
    }
    }}
const instances = () =>{
  let dnaInstances = [];
  for (let i=1; i<31;i++){
    let check = true
    while (check) {
      newpAequor = pAequorFactory (i, mockUpStrand());
      if (newpAequor.willLikelySurvive() ==true){
        dnaInstances.push(newpAequor)
        check = false
      }
    }      
  }return dnaInstances;
}

instances()
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test1.dna);
console.log(test2.dna);
console.log(test1);
console.log(test2);
test1.compareDNA(test2);
test2.compareDNA(test1);
console.log(test1.willLikelySurvive());
console.log(test2.willLikelySurvive());
console.log(test2.mutate());