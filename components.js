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
});

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
      date: "2017-08-24",
      release: "4.2.1",
	  starttime: 2,
	  latesttimestamp: 4
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
      passed: 102,
      failed: 0
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
			  <div style="display: inline-block; text-align: center; vertical-align: middle; width: 100%; color:#363636; font-size:100px" v-if="isfailed == true" class="content"><b>{{ nok }}</b></div>
			  <div style="display: inline-block; text-align: center; width: 100%; color:#363636; font-size:100px" v-else class="content"><b>{{ go }}</b></div>
	</article>
  </div>
  `
  ,
  props: ['gonogo'],
  data () {
    return {
      isfailed: true,
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
					OVERALL<progress v-bind:class="{'is-warning': incompleteFlagOverall, 'is-success': completeFlagOverall}" class="progress is-small" :value="progressoverall" max="100">{{ progressoverall }}</progress>
					CKI<progress v-bind:class="{'is-warning': incompleteFlagCKI, 'is-success': completeFlagCKI}" class="progress is-small" :value="progresscki" max="100">{{ progresscki }}</progress>
				</div>
			</article>
		</div>
	</div>
  `
  ,
 props: ['progress'],
  data () {
    return {
      cki: 10,
	  ckitotal: 60,
    }
  },
  computed: {
	 incompleteFlagOverall() { 
		calculation = this.progressoverall < 100 ? true : false
		return calculation
	 },
	 
	 completeFlagOverall() { return !this.incompleteFlagOverall},
	 
	 progressoverall() {
      return (((this.cki)/(this.ckitotal))*100)
    },
	
	incompleteFlagCKI() { 
		calculation = this.progresscki < 100 ? true : false
		return calculation
	 },
	 
	 completeFlagCKI() { return !this.incompleteFlagCKI},

	progresscki() {
      return ((this.cki/this.ckitotal)*100)
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
                    <td>Response geeft error 500</td>
                  </tr>
                  <tr>
                    <th>CKI_2</th>
                    <td>FAIL</td>
                    <td>Achterstand wordt niet weergegeven in overzicht</td>
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

Vue.component('demo-grid', {
template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
});



var app = new Vue({
  el: '#app',
  data: {
    searchQuery: '',
    gridColumns: ['Test_Name', 'Status', 'Error_Description'],
    gridData: [
      { Test_Name: 'Test1_Cki', Status: 'Warning', Error_Description: 'Alles fout' },
      { Test_Name: 'Test2_Cki', Status: 'Fail', Error_Description: 'Alles fout' },
      { Test_Name: 'Test1_VIS', Status: 'Error', Error_Description: 'Alles fout' },
      { Test_Name: 'Test1_VIS', Status: 'Fatal', Error_Description: 'Alles fout' }
    ]
  }
});
