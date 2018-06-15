import React,{Component} from 'react';



class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      labTestItems:[]
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }




   componentWillMount(){

     // fetch(`http://localhost:5000/api/labtests/${this.state.user.pid}/${this.state.user.bht}`)
     fetch('http://localhost:5000/api/labtests/1/1234')
        .then(res=>res.json())
         .then(labTestItems=> this.setState({labTestItems},()=> console.log(labTestItems)));

  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
          console.log(this.state.file);
      console.log(this.state.imagePreviewUrl);


        const newDrug={
          pId:"1",
          bedid:"1234",
          image:this.state.imagePreviewUrl
    }
    //Empty feild validation
    

      //console.log(this.refs.pass.value)
      fetch('http://localhost:5000/api/labtests',{
          method:'POST',
          headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type': 'application/json'

          },
            body: JSON.stringify(newDrug)

        })
          .then((res)=>res.json())
            .then(alert("Drug Prescribed sucessfully"))



  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }


    reader.readAsDataURL(file)
  }

  render() {

    // let {imagePreviewUrl} = this.state;
    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //   $imagePreview = (<img src={imagePreviewUrl} />);
    // }


      var labReports =this.state.labTestItems.map((labItems,i)=>{
            
            console.log("lol "+labItems.image)
      return(
          <img src={labItems.image} />
        )


              
     })

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {labReports}
      </div>
    )
  }

}

export default ImageUpload;