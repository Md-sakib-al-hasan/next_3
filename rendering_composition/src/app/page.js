// 'use client';

// import styled from 'styled-components';

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   gap: 1.5rem /* 24px */;
// `;

// const SkeletonInner = styled.div`
//   padding: 1rem /* 16px */;
//   background-color: rgb(24 24 27 / 0.8);
//   border-radius: 1rem /* 16px */;
// `;
// export default function Home() {
//   return (
//     <div className="container">
//       <h1 >Hello, styled-jsx with Next.js 13+!</h1>
//       <p>Welcome to the styled-jsx demo with Next.js 13+.</p>
//       <Container>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sapiente repudiandae aliquam ipsam. Explicabo culpa assumenda quam magnam maxime quis voluptatibus inventore ad, sit cupiditate enim totam corporis! Animi, quidem?
//       </Container>
//       <style jsx>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           background-color: #f0f0f0;
//         }
//         h1 {
//           color: #0070f3;
//         }
//         p {
//           color: #333;
//         }
//       `}</style>
//     </div>
//   )
// }

// maps to root `/` URL

// import variables from './variables.module.scss'

// export default function Page() {
//   return <h1 style={{ color: variables.primaryColor }} className={variables.sk}>Hello, Next.js!</h1>
// }

// app/page.js

import styles from './variables.module.scss';

export default function Page() {
  return <h1 className={styles.primaryColor}>Hello, Next.js!</h1>;
}
