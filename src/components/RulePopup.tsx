import { useContext,  } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import Backdrop from './backdropDom'
import './Rule.scss'
import userCon from '../UserCon'
import closeImg from '../assets/img/close.png'
function RuleDialog() {
  const { id } = useParams()
  const { param, isExact, path, url } = useRouteMatch()
  console.log('参数', param, isExact, path, url)
  let store = useContext(userCon)
  return (
    <Backdrop>
      <div className='rule-popup'>
        <img
          src={closeImg}
          className='close'
          onClick={() => store.changeDialog(false)}
        />
        <div className='t'>活动规则{id}</div>
        <div className='txt'>
          参与本活动前请仔细阅读本活动规则及相关条款。凡参与本活动，则视用户已阅读理解并同意本活动规则全部内容。
          <br />
          <br />
          1.用户参与「天天挖矿」小游戏为虚拟挖矿，通过消耗体力值可以挖出虚拟「铁矿」，「铁矿」可以按照一定比例在「收矿商人」处兑换成金币。兑换比例及数量系统会根据每日挖矿兑换数量进行调整。当用户剩余铁矿为99999g时将停止挖矿。
          <br />
          2.用户可以通过消耗道具卡（时光卡、运气卡）来加快挖矿速度和提高挖矿数量，用体力卡来恢复体力值。
          <br />
          3.体力值最高为100点，除使用体力卡恢复外，每日00:00会自动重置回满；当体力值为0时停止挖矿；每日需要手动点击参与才会自动挖矿；
          <br />
          <br />
          注意事项：
          <br />
          凡以不正当手段参与活动的用户（包括但不限于扰乱系统、实施网络攻击、使用网络外挂等以及其他作弊违规行为不正当获得活动权益的和在参与活动过程中违反国家法律或侵犯他人合法权益包括利用活动辱骂、骚扰他人，上传违法违规内容，违反社会公序良俗，侵犯他人合法权益的）平台有权取消用户活动参与资格，并有权回收用户获得的权益；如有问题请联系客服咨询予以解答；
          <br />
          本次活动与Apple Inc.无关
        </div>
      </div>
    </Backdrop>
  )
}

export default RuleDialog
