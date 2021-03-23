import React from 'react';
//import useClippy from 'use-clippy';
import useCopyninja from '../src/use-copyninja';


export default function MyComponent() {

  // clipboard is the contents of the user's clipboard.
  // setClipboard('new value') wil set the contents of the user's clipboard.
  const [copyninja, addCopyninja, clipboard] = useCopyninja();
  console.log(clipboard, copyninja)

  return (
    <div>
      <button
        onClick={() => {
          //alert(`Your copyninja contains: ${copyninja}`);
          alert(`Your clipboard contains: ${clipboard}`);
        }}
      >
        Read my clipboard
      </button>

      {/* Button that demonstrates writing to the clipboard. */}
      <button
        onClick={() => {
          addCopyninja(`${Math.random()}`);
        }}
      >
        Add Clipboard to Copyninja
      </button>
      <br/>
      <br/>
      <div>
      선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대통령은 취임에 즈음하여 다음의 선서를 한다.

국가는 청원에 대하여 심사할 의무를 진다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.

언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를 침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다.

대한민국의 국민이 되는 요건은 법률로 정한다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.

명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.

한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다.
      </div>
    </div>
  );
}