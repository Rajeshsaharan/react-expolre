import React, { useEffect, useRef, useState } from 'react'
import './App.css';


const UseStateHook = () => {
  const [showsidebaropenButton, setSidebarShowButton] = useState(true)
  const sidebarElment = useRef(null)
  const mainContentElement = useRef(null)

  const  showSidebar =() => {
    sidebarElment.current.style.width = "275px"
    mainContentElement.current.style.marginLeft = "275px"
  }

  const hideSidebar =()=> {
    sidebarElment.current.style.width = "0px"
    mainContentElement.current.style.marginLeft = "0px"
  }


  useEffect(() => {

    if (window.innerWidth > 900) {
      showSidebar()
      setSidebarShowButton(false)

    } else {
      hideSidebar()
      setSidebarShowButton(true)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 900) {
        hideSidebar()
        setSidebarShowButton(true)

      }else{
        showSidebar()
        setSidebarShowButton(false)
  
      }

    })

  }, [])

  return (
    <>

      
      <div className='top'>
      <header><h1><i class="fi fi-sr-layout-fluid">SMS portal</i></h1></header>
      <div className='sidebar' ref={sidebarElment}>content from sidebar
        {showsidebaropenButton && <button onClick={hideSidebar}>hide sidebar</button>}
      </div>
      <main ref={mainContentElement}>
        {showsidebaropenButton && <button onClick={showSidebar}>show sidebar</button>}
      <p>  
        takes 

        secondWhat is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper sem ac elit luctus consectetur. Sed id turpis at ipsum luctus auctor. Morbi ultricies, elit ut lacinia consectetur, nunc dui bibendum enim, in ultrices urna mauris eget ipsum. Fusce ac sem pharetra, ultricies metus et, gravida eros. Nulla facilisi. Vestibulum pulvinar id neque ac tempor. Cras risus nibh, rhoncus nec eros vel, vehicula ullamcorper tellus. Nullam felis arcu, bibendum tincidunt commodo at, interdum condimentum elit. Maecenas vel arcu et risus pharetra volutpat eget a nisl. Donec mattis augue sed rhoncus auctor. Nam quis suscipit sem.

In porta imperdiet leo vitae iaculis. Proin semper auctor arcu sit amet condimentum. Sed sed arcu a dolor vestibulum sagittis nec nec arcu. Donec ac lobortis urna. Sed sit amet ligula eget nulla sollicitudin tincidunt. Sed sed magna eu libero suscipit posuere. Cras justo quam, aliquet ac lorem in, congue bibendum diam. Aenean volutpat malesuada felis, eget ultricies ante facilisis non. Proin tempus, tortor vitae dictum egestas, mi tellus fringilla lectus, quis consequat nunc elit dictum mi. In hac habitasse platea dictumst. Phasellus euismod eu lorem sit amet congue. Proin sodales cursus ex, et cursus turpis commodo et. Nullam suscipit tempor massa, at volutpat lacus hendrerit eu. Suspendisse potenti. Maecenas mollis efficitur erat, in efficitur velit pulvinar sed. Fusce tristique elementum fermentum.

Nulla elementum, lacus ac gravida elementum, felis nulla efficitur lorem, id pretium felis sem sit amet mi. Sed pretium finibus erat in imperdiet. Ut vehicula sapien dui, id egestas mi mollis ac. Aliquam tempor vehicula tortor a consectetur. Ut ut elit vel ex rhoncus mollis interdum ac odio. Vivamus pretium nunc vitae enim dictum condimentum. Nunc ut ultricies elit. Ut posuere sapien ut elit tincidunt, eget dignissim est tempus. Nullam vel eleifend ipsum, in efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Mauris auctor tortor ex, sodales ornare ex dapibus eget.

Nam id lacus in dui aliquam feugiat. Fusce lacinia turpis at libero feugiat vestibulum. Aliquam in odio ut mi hendrerit imperdiet ut ut ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi non orci eu magna commodo posuere. Curabitur aliquam felis urna. Nulla ultrices lacus ac eleifend consectetur. Pellentesque cursus diam nec enim varius sollicitudin ac viverra eros. Donec pellentesque ligula vitae lectus commodo interdum. Duis rutrum id lorem at laoreet. Vestibulum fermentum vitae nisi non varius. Sed quis aliquet risus. Sed lorem magna, mollis ut ullamcorper nec, egestas vel leo. Vestibulum luctus, enim ut euismod hendrerit, leo velit porta sem, sed rutrum justo arcu a arcu. Aliquam erat volutpat. Nullam dictum convallis eleifend.

Mauris eu felis quis orci facilisis dignissim. Curabitur ullamcorper dignissim nulla a suscipit. Fusce sed nulla a felis elementum pretium in a libero. Donec eu lacus et ligula molestie pellentesque. Ut in neque ut ante dictum dapibus ut efficitur lectus. Cras in odio in nunc fringilla interdum. Nunc pretium justo augue, at rutrum orci mattis nec. Fusce nec sagittis diam, sed accumsan mauris. Quisque facilisis ligula vitae placerat viverra. Suspendisse dapibus odio ac dignissim mollis. Donec consectetur suscipit velit eu suscipit.

Nunc fermentum, diam at convallis pellentesque, diam eros sodales sem, nec bibendum tellus enim eget sapien. In purus ligula, euismod feugiat auctor eget, auctor vel nisi. Aenean nec hendrerit elit, lobortis semper ex. In in augue feugiat, tincidunt sem a, pulvinar eros. Aliquam erat volutpat. Nulla facilisi. Cras ut est sit amet tellus molestie iaculis ac sed eros. Nunc lacus arcu, tincidunt id metus eu, feugiat gravida sem. Duis varius velit quis justo fringilla gravida. In ut accumsan urna. Mauris nec neque nisl. Pellentesque maximus, elit non dapibus ornare, ipsum sem pretium risus, eu placerat lacus justo sed arcu. Donec gravida nisi nec tellus consequat, at lacinia velit pharetra. Aenean lacinia felis quam, et pulvinar ante volutpat non. Suspendisse potenti. Donec imperdiet ultricies auctor.

Morbi scelerisque metus felis, ac cursus diam rutrum semper. Pellentesque posuere magna eu risus aliquam, non accumsan erat pretium. Pellentesque egestas mauris mollis mauris malesuada, quis varius massa sagittis. Aenean sed tortor erat. Pellentesque tempus pharetra eros nec dapibus. Sed at eros eu leo efficitur tristique. Nam quam augue, efficitur nec eros non, eleifend condimentum enim. Vivamus in elementum arcu. Vivamus lobortis nibh fermentum magna blandit, at rhoncus sem scelerisque. Nulla cursus commodo faucibus. Proin viverra et quam vel dignissim. In quis tincidunt nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vitae leo in lorem dignissim placerat nec eu est. Vivamus ut massa felis.

Maecenas consequat at est sed maximus. Proin finibus sollicitudin ipsum vitae ultricies. Donec ac eros ac turpis sollicitudin luctus. Nam fringilla eros felis, ut cursus ex dignissim nec. Integer euismod rutrum libero eu imperdiet. Nulla pellentesque leo quis faucibus convallis. Praesent tincidunt a tortor eget faucibus. Nam pulvinar, tellus ac pharetra pellentesque, sapien lorem tempor est, nec dignissim massa quam non velit. Donec eu sapien sit amet dui ultrices mollis fermentum at nibh. Vestibulum id porttitor sapien.

Pellentesque turpis lacus, consectetur sed est eget, eleifend luctus nibh. Sed euismod iaculis risus, a varius erat euismod et. Mauris mi dui, cursus ut tellus ac, suscipit ultrices metus. Morbi ut ligula tempor mauris pharetra cursus nec eget erat. Mauris finibus dolor eget libero accumsan tempor. Phasellus dictum sapien sit amet vestibulum vulputate. Nam eu efficitur metus. Vivamus sit amet mauris finibus, maximus nisi efficitur, volutpat arcu. Proin interdum facilisis orci, sit amet scelerisque leo ultrices nec.

Maecenas id nulla volutpat, facilisis elit aliquet, egestas ipsum. Aliquam vehicula commodo nisi eu ultricies. Donec nibh neque, faucibus in congue laoreet, semper eu neque. Aenean sed nulla id urna lacinia placerat quis vitae massa. Duis ac elit gravida, molestie felis non, eleifend dolor. Curabitur et consectetur nulla, quis suscipit magna. Nunc eu justo pretium, pulvinar mauris sed, facilisis odio. Sed enim orci, pellentesque quis massa eget, lacinia finibus nibh.

Aliquam ultricies vehicula metus ut consequat. Proin lobortis dictum tortor, quis convallis sem commodo eu. Suspendisse eleifend, ex sed luctus condimentum, velit risus luctus erat, vel pulvinar lorem elit a turpis. Praesent a ullamcorper justo, ut molestie tortor. Suspendisse consectetur, ligula eget viverra venenatis, sapien odio laoreet metus, in suscipit dui quam id nulla. Nunc dapibus libero id mi condimentum, at commodo mauris suscipit. Nullam in placerat lectus. Donec pulvinar leo risus, vitae rutrum lectus sagittis vel. Nulla nec dui quis augue venenatis mattis vitae ac sem. Praesent pharetra pulvinar lacus quis hendrerit. Aenean sit amet nisi ac sem posuere vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vitae tempor velit.

Praesent et viverra justo. Praesent posuere dui quis orci hendrerit malesuada. Vivamus euismod neque vel tellus malesuada, a condimentum urna tincidunt. Ut convallis malesuada eros, ac accumsan lacus fringilla vitae. Nunc lacinia est non mi luctus feugiat. Phasellus venenatis pellentesque velit, eget tincidunt felis auctor eu. Sed sed volutpat eros. Vivamus tincidunt at erat id scelerisque. Fusce a imperdiet sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sapien magna, euismod vitae pharetra vitae, commodo ac massa. Pellentesque sit amet lorem turpis. Praesent venenatis elit in metus vehicula, a malesuada tortor maximus. Fusce mi quam, efficitur eget aliquet sed, hendrerit ac ex.

Maecenas suscipit mattis porta. Sed ullamcorper ante lacus, vitae elementum tellus scelerisque mattis. Donec sed eros non massa efficitur bibendum accumsan id nisi. Sed pellentesque scelerisque sagittis. Ut eleifend sem risus, et hendrerit enim pretium vel. Sed tempor mi metus, quis mollis purus egestas id. Aliquam quis magna vestibulum, blandit arcu et, feugiat velit. Nullam laoreet mauris ac massa semper facilisis. Sed imperdiet enim lectus, non viverra lectus congue sit amet. Phasellus ornare diam a purus tincidunt, ut hendrerit ipsum dapibus. Suspendisse eleifend commodo sagittis. Fusce luctus commodo purus et accumsan.

Aliquam vel commodo turpis, et bibendum tortor. Sed commodo a sapien ac ultricies. Integer imperdiet tortor id lorem pulvinar, a efficitur mi aliquam. Morbi mollis in sapien vel commodo. Proin lobortis odio a efficitur pellentesque. Ut eu lorem a felis varius lobortis sed congue turpis. Duis tincidunt placerat sapien vel congue. Vestibulum maximus mauris enim, quis lacinia felis congue quis.

Suspendisse vehicula ex nec massa tincidunt rhoncus. Integer quis eleifend massa. Donec vel tellus at libero bibendum bibendum. Praesent ut ipsum tortor. Suspendisse lacus elit, convallis in turpis sed, molestie tincidunt eros. Vivamus ex lacus, ullamcorper id sollicitudin a, elementum et magna. Mauris aliquet quis velit eu euismod. Nam maximus feugiat massa, quis porttitor quam scelerisque et. Mauris pretium accumsan ligula in vulputate. Pellentesque eu euismod dolor.

Vestibulum vehicula volutpat purus. Nam sollicitudin lobortis eros. In eget arcu non ipsum commodo sodales eu quis augue. Etiam dictum et lectus sit amet gravida. Vivamus rutrum ante vel velit interdum volutpat. Morbi scelerisque condimentum tellus, nec imperdiet nunc bibendum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eget auctor nibh. Fusce fringilla orci in nisl maximus malesuada. Maecenas non ex ac dui accumsan ullamcorper nec non nibh. Quisque vestibulum neque sit amet magna venenatis pharetra. Duis a porttitor neque. In ut dictum felis, eget suscipit ex. In pretium viverra ex quis fermentum. Donec ut est eget massa ultricies consequat sit amet vitae metus.

Praesent vulputate commodo tincidunt. In aliquam a sapien quis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida mauris id neque iaculis vehicula. Morbi eget vulputate mi. Phasellus sollicitudin eu dolor eu vulputate. In vitae risus in metus efficitur vestibulum. Fusce varius nunc nec massa sodales commodo. Ut in tincidunt felis. Vivamus condimentum mi eu consectetur consequat. Proin vestibulum consectetur arcu vel mollis. Pellentesque cursus orci in arcu pharetra, et vestibulum lectus laoreet. Maecenas a dictum mi, id maximus sem. Suspendisse suscipit libero velit, vitae aliquam tellus viverra eget.

Quisque ut fringilla massa, id interdum ex. Morbi id rutrum augue. Phasellus est enim, fermentum sit amet molestie at, pulvinar non diam. Etiam id tortor sagittis tellus tincidunt condimentum. Fusce enim felis, convallis eget malesuada aliquet, eleifend non metus. Aenean vel bibendum magna. Integer malesuada, nisl congue viverra elementum, tellus sem tincidunt purus, quis placerat purus nulla id sapien. Sed a dictum felis, eu sollicitudin nulla. Nulla facilisi. Ut ultrices viverra mauris, dictum tempor enim aliquam vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In euismod, nulla vel consectetur viverra, tellus turpis consequat erat, eu lacinia felis orci non est. Nunc vel leo metus. Aliquam et aliquam nunc. Aenean posuere et felis id gravida. Etiam id purus eu lacus vehicula vestibulum.

Quisque ac interdum velit. Donec venenatis, lacus nec pharetra sodales, dui justo rhoncus dolor, nec semper nulla velit a nunc. Donec venenatis finibus luctus. Pellentesque porttitor consequat dapibus. Phasellus id faucibus quam. Integer condimentum tincidunt metus, vitae sollicitudin ligula fermentum in. Praesent quis turpis id nulla ornare varius quis non mauris. Integer quis enim ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec rhoncus ullamcorper lectus, in vehicula dolor imperdiet eu.

Nunc dictum ex quis ipsum pharetra ullamcorper eu in metus. Nulla id viverra nisl. Vestibulum massa nisi, tincidunt quis suscipit eu, sodales tristique ante. Donec in maximus enim, ornare ullamcorper est. Suspendisse ipsum erat, ultrices sed consectetur quis, iaculis dictum risus. Praesent a porttitor ex, et convallis justo. Proin nunc justo, sagittis id finibus volutpat, ullamcorper eu augue. Etiam sed interdum eros, a finibus dolor. Cras scelerisque, justo vel mattis commodo, massa ligula laoreet quam, aliquam semper arcu nulla eget dolor. Proin ultrices leo ut tempor vulputate. Morbi hendrerit commodo ante, quis euismod neque dignissim vitae. Nulla et sagittis odio. Donec dui leo, lacinia quis diam tempus, feugiat rhoncus metus. Maecenas sed convallis elit, quis tincidunt enim.

Generated 20 paragraphs, 1946 words, 13101 bytes of Lorem Ipsum
help@lipsum.com
Privacy Policy

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

        h1

        h1
</p>
        </main>
      </div>
    </>
  )
}

export default UseStateHook