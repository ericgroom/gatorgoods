import Form from "./styles/Form";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    .cancel{
         width:178px;
         height:50px;
         background-color:#ff3232 ;
         border-radius:5px;
         font-weight:bold;
         color:white;
    }
   .divider {
        width:50px;
        height:auto;
        display:inline-block;
    }
      .submit{
             padding: "20px";
             width:178px;
             height:50px;
             background-color: #006400 ;
             padding:12px;
             border-radius:5px;
             font-weight:bold;
             color:white;
        }
`;

class Sell extends React.Component {
  state = {
    loading: false,
    title: "",
    description: "",
    price: 0,
    category: 0,
    error: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <Form>
        <fieldset>
          <h1> Sell Item </h1>
          <label htmlFor="title">
            Title*
            <input type="text" placeholder="Title Text" name="title" />
          </label>
          <label htmlFor="category">
            Category*
            <br />
            <select name="category">
              <option value="0">Select a category...</option>
              <option value="1">Furniture</option>
              <option value="2">Electronics</option>
              <option value="3">Clothing</option>
              <option value="4">Books</option>
              <option value="5">Miscellaneous</option>
            </select>
          </label>
          <label htmlFor="Price">
            Price*
            <input type="text" placeholder="$" />
          </label>
          <label htmlFor="description">
            Description*
            <input type="text" placeholder="Description" />
          </label>
          <label htmlFor="image">
            Image* <input type="file" name="image" />
          </label>
           <div>
              <h6> * Required fields. </h6>
           </div>
          <ButtonWrapper>
            <Link href={{pathname:"/"}}>
                <input className="submit" type="submit" value="Post" onClick={()=> {alert("Your post is awaiting approval by the Moderator.")}} />
            </Link>
            <div className="divider"/>
            <Link href={{pathname:"/"}}>
                <input className="cancel" type="button" value="Cancel"/>
            </Link>
           </ButtonWrapper>
        </fieldset>
      </Form>
    );
  }
}

export default Sell;
