Vue.component('current-time', {
  template: `
<div style="display: inline-block; text-align: right; width: 100%; color:#adabab">
          <p>{{ formatedDate }}{{ formatedTime }}</p>
      </div>
  `,
  props: ['timer'],
  data () {
    return {
      currentTime: new Date(),
      cycle: 0,
      refreshTime: 1000 // One second timer
    }
  },
  computed: {
    formatedDate() {
      return moment(this.currentTime).format("dddd, MMMM Do YYYY")
    },
    formatedTime() {
      return moment(this.currentTime).format("HH:mm:ss")
    }
  },
  mounted () {
    this.cycle = setInterval(() => {
      this.currentTime = moment(this.currentTime).add(1,"s")
    }, this.refreshTime)
  }
})

Vue.component('force-release', {
  template: `
      <div class="tile is-parent">
        <article class="tile is-child notification is-Dark">
          <p class="subtitle">Force Release</p>
          <div class="content">
		  Release: {{ release }}
		  <br>
		  Date: {{ formatedExecutionDate }}
		  <br>
		  Execution time: {{ executiontime }} hours
          </div>
        </article>
      </div>
  `
  ,
  props: ['releasestats'],
    data () {
    return {
      date: "2017-08-23",
      release: "4.2.1",
	  starttime: 2,
	  latesttimestamp: 34
    }
  },
  computed: {
	  formatedExecutionDate() {
      return moment(this.date).format("dddd, MMMM Do YYYY")},
	executiontime() {
      return (this.latesttimestamp - this.starttime)
    }
  }
});

Vue.component('execution-status', {
  template: `
  <div class="tile is-parent">
    <article class="tile is-child notification is-Dark">
      <p class="subtitle">Execution Status</p>
      <div class="content">
	  <table>

			<tr>
				<td style="color:#23d160; 
                   font-weight:bold">Testcases Passed</td>
				<td style="color:#FFFFFF; 
                   font-weight:bold">{{ passed }}</td>
			</tr>
			<tr>
				<td style="color:#FF3860; 
                   font-weight:bold">Testcases Failed</td>
				<td style="color:#FFFFFF; 
                   font-weight:bold">{{ failed }}</td>
			</tr>
			<tr>
				<td style="color:#FFFFFF; 
                   font-weight:bold">Testcases Total</td>
				<td style="color:#FFFFFF; 
                   font-weight:bold">{{ totaltests }}</td>
			</tr>

	 </table>
      </div>
    </article>
  </div>
  `
  ,
  props: ['testcases_status_totals'],
  data () {
    return {
      passed: 100,
      failed: 100,
    }
  },
  computed: {
	totaltests() {
      return (this.passed + this.failed)
    }
  }
});

Vue.component('overall-status', {
  template: `
  <div class="tile is-parent">
    <article v-bind:class="{'is-danger': isfailed, 'is-success': isSuccess}" class="tile is-child notification">
	      <p class="subtitle">Overall Status</p>
			  <div style="display: inline-block; text-align: center; width: 100%; color:#363636; font-size:100px" v-if="isfailed == true" class="content"><b>{{ amountfailed }}</b></div>
			  <div style="display: inline-block; text-align: center; width: 100%; color:#363636; font-size:100px" v-else class="content"><b>{{ go }}</b></div>
	</article>
  </div>
  `
  ,
  props: ['gonogo'],
  data () {
    return {
      isfailed: false,
	  go: "OK",
	  nok: "NOK"
    }
  },
  computed: {
	  isSuccess() {
		  return !this.isfailed;
	  }
  }
});

Vue.component('progress-per-area', {
  template: `
  <div class="tile is-ancestor">
		<div class="tile is-parent" >
			<article class="tile is-child notification is-Dark">
				<p class="subtitle">Progress per area</p>
				<div class="content">
					OVERALL<progress class="progress is-small is-Warning" :value="progressoverall" max="100">{{ progressoverall }}</progress>
					CKI<progress class="progress is-small is-Warning" :value="progresscki" max="100">{{ progresscki }}</progress>
					VIS<progress class="progress is-small is-Warning" :value="progressvis" max="100">{{ progressvis }}</progress>
					SFH<progress class="progress is-small is-Warning" :value="progresssfh" max="100">{{ progresssfh }}</progress>
				</div>
			</article>
		</div>
	</div>
  `
  ,
 props: ['progress'],
  data () {
    return {
      cki: 16,
	  ckitotal: 98,
      vis: 15,
	  vistotal: 32,
	  sfh: 80,
	  sfhtotal: 100
    }
  },
  computed: {
	 progressoverall() {
      return (((this.cki+this.vis+this.sfh)/(this.ckitotal+ this.vistotal + this.sfhtotal))*100)
    },
	progresscki() {
      return ((this.cki/this.ckitotal)*100)
    },
	progressvis() {
      return ((this.vis/this.vistotal)*100)
    },
	progresssfh() {
      return ((this.sfh/this.sfhtotal)*100)
    }
  }
});

Vue.component('datatable-with-failures', {
  template: `
  <div class="tile is-ancestor">
				<div class="tile is-parent">
          <article class="tile is-child notification is-Dark">
            <p class="subtitle">Failures</p>
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
