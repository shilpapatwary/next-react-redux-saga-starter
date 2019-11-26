import React, { Component } from "react";
import Link from "next/link";
import { SampleReactTypes } from '../src/redux/types';
import { connect } from "react-redux";
interface Props {
 data1: Array<any>;
}
class Index extends Component<Props, any> {
   static async getInitialProps({isServer, store}) {
   await store.dispatch({type: SampleReactTypes.SAMPLE_REACT_TYPE});
   return {}
   }
render() {
  return <>
     <header>
        <Link href="about"><a>About</a></Link>
     </header>
     <div>
        <p>SSR with Next.js+ react + redux + redux-saga + typescript
            + jest</p>
    </div>
   {this.props.data1 && <span>Data loaded:
   {this.props.data1.length} items</span> }
   <ul>
     <li><Link href="/product/[id]" as={`/product/${1}`}>
       <a>Product 1</a></Link>
     </li>
   </ul>
</>
 }
}
export default connect(state => state)(Index);