import React from 'react'

const Home = () => {
  return (
    <div>
          <div class="ui large secondary pointing menu">

          <a class="active item" data-tab="first"><i class="instagram outline icon"></i>Instagram</a>
          <a class="item" data-tab="second"><i class="comments outline icon"></i>DIRECT</a>
          <a class="item" data-tab="third"><i class="list icon"></i>ACTIVITY</a>

<div class="ui right item">
  <div class="ui search transparent icon input">
    <input type="text" placeholder="Search ..." class="prompt" /><i class="search link icon"></i>
  </div>
</div>

</div>
    </div>
  )
}

export default Home