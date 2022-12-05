import classes from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'
import { useEffect } from 'react'

export function Main(props) {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightBlue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "Blue";
    }
  }, []);

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  )
}
