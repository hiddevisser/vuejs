Vue.component('force-release', {
  template: `
      <div class="tile is-parent">
        <article class="tile is-child notification is-Dark">
          <p class="title">Force Release</p>
          <div class="content">
          </div>
        </article>
      </div>
  `,
  props: ['todo']
});

Vue.component('execution-status', {
  template: `
  <div class="tile is-parent">
    <article class="tile is-child notification is-Dark">
      <p class="title">Execution Status</p>
      <div class="content">
      </div>
    </article>
  </div>
  `
  ,
  props: ['todo']
});

Vue.component('overall-status', {
  template: `
  <div class="tile is-parent">
    <article class="tile is-child notification is-Dark">
      <p class="title">Overall Status</p>
      <div class="content">
      </div>
    </article>
  </div>
  `
  ,
  props: ['todo']
});

Vue.component('progress-per-area', {
  template: `
  <div class="tile is-ancestor">
		<div class="tile is-parent">
			<article class="tile is-child notification is-Dark">
				<p class="title">Progress per area</p>
				<div class="content">
					CKI<progress class="progress is-success" value="60" max="100">60%</progress>
					VIS<progress class="progress is-warning" value="75" max="100">75%</progress>
					SFH<progress class="progress is-danger" value="90" max="100">90%</progress>
				</div>
			</article>
		</div>
	</div>
  `
  ,
  props: ['todo']
});

Vue.component('datatable-with-failures', {
  template: `
  <div class="tile is-ancestor">
				<div class="tile is-parent">
          <article class="tile is-child notification is-Dark">
            <p class="title">Failures</p>
            <div class="content">
              <table class="table">
                <thead>
                  <tr>
                    <th>Test name</th>
                    <th>status</th>
                    <th>Failure description</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Test name</th>
                    <th>status</th>
                    <th>Failure description</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <th>CKI_1</th>
                    <td>FAIL</td>
                    <td>Ging niet goed omdat erweer een foutje maakte zoals gewoonlijk!!!!</td>
                  </tr>
                  <tr>
                    <th>CKI_2</th>
                    <td>FAIL</td>
                    <td>Ging niet goed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
  `
  ,
  props: ['todo']
});

var app = new Vue({
  el: '#app'
});
