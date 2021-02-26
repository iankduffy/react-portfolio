import Block from '../../../lib/blockContent'
import styles from './textGroup.module.scss'

const TextGroup = ({textBlocks, ...props}) => {
  console.log(textBlocks)

	return(
    <section className={`container u-pad-v-md ${styles.grid} u-pad-h-md@md`}>
      {textBlocks.map((block) => <Block blocks={block.text}/>)}
    </section>
  )
}

export default TextGroup
