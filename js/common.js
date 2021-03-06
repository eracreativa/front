var countryCode = { 4: "Afghanistan", 8: "Albania", 10: "Antarctica", 12: "Algeria", 16: "American Samoa", 20: "Andorra", 24: "Angola", 28: "Antigua and Barbuda", 31: "Azerbaijan", 32: "Argentina", 36: "Australia", 40: "Austria", 44: "Bahamas", 48: "Bahrain", 50: "Bangladesh", 51: "Armenia", 52: "Barbados", 56: "Belgium", 60: "Bermuda", 64: "Bhutan", 68: "Bolivia", 70: "Bosnia and Herzegovina", 72: "Botswana", 74: "Bouvet Island", 76: "Brazil", 84: "Belize", 86: "British Indian Ocean Territory", 90: "Solomon Islands", 92: "Virgin Islands", 96: "Brunei Darussalam", 100: "Bulgaria", 104: "Myanmar", 108: "Burundi", 112: "Belarus", 116: "Cambodia", 120: "Cameroon", 124: "Canada", 132: "Cabo Verde", 136: "Cayman Islands", 140: "Central African Republic", 144: "Sri Lanka", 148: "Chad", 152: "Chile", 156: "China", 158: "Taiwan, Province of China", 162: "Christmas Island", 166: "Cocos (Keeling) Islands", 170: "Colombia", 174: "Comoros", 175: "Mayotte", 178: "Congo", 180: "Congo", 184: "Cook Islands", 188: "Costa Rica", 191: "Croatia", 192: "Cuba", 196: "Cyprus", 203: "Czechia", 204: "Benin", 208: "Denmark", 212: "Dominica", 214: "Dominican Republic", 218: "Ecuador", 222: "El Salvador", 226: "Equatorial Guinea", 231: "Ethiopia", 232: "Eritrea", 233: "Estonia", 234: "Faroe Islands", 238: "Falkland Islands", 239: "South Georgia and the South Sandwich Islands", 242: "Fiji", 246: "Finland", 248: "Åland Islands", 250: "France", 254: "French Guiana", 258: "French Polynesia", 260: "French Southern Territories", 262: "Djibouti", 266: "Gabon", 268: "Georgia", 270: "Gambia", 275: "Palestine, State of", 276: "Germany", 288: "Ghana", 292: "Gibraltar", 296: "Kiribati", 300: "Greece", 304: "Greenland", 308: "Grenada", 312: "Guadeloupe", 316: "Guam", 320: "Guatemala", 324: "Guinea", 328: "Guyana", 332: "Haiti", 334: "Heard Island and McDonald Islands", 336: "Holy See", 340: "Honduras", 344: "Hong Kong", 348: "Hungary", 352: "Iceland", 356: "India", 360: "Indonesia", 364: "Iran", 368: "Iraq", 372: "Ireland", 376: "Israel", 380: "Italy", 384: "Côte d'Ivoire", 388: "Jamaica", 392: "Japan", 398: "Kazakhstan", 400: "Jordan", 404: "Kenya", 408: "Korea (Democratic People's Republic of)", 410: "Korea (Republic of)", 414: "Kuwait", 417: "Kyrgyzstan", 418: "Lao People's Democratic Republic", 422: "Lebanon", 426: "Lesotho", 428: "Latvia", 430: "Liberia", 434: "Libya", 438: "Liechtenstein", 440: "Lithuania", 442: "Luxembourg", 446: "Macao", 450: "Madagascar", 454: "Malawi", 458: "Malaysia", 462: "Maldives", 466: "Mali", 470: "Malta", 474: "Martinique", 478: "Mauritania", 480: "Mauritius", 484: "Mexico", 492: "Monaco", 496: "Mongolia", 498: "Moldova", 499: "Montenegro", 500: "Montserrat", 504: "Morocco", 508: "Mozambique", 512: "Oman", 516: "Namibia", 520: "Nauru", 524: "Nepal", 528: "Netherlands", 531: "Curaçao", 533: "Aruba", 534: "Sint Maarten", 535: "Bonaire, Sint Eustatius and Saba", 540: "New Caledonia", 548: "Vanuatu", 554: "New Zealand", 558: "Nicaragua", 562: "Niger", 566: "Nigeria", 570: "Niue", 574: "Norfolk Island", 578: "Norway", 580: "Northern Mariana Islands", 581: "United States Minor Outlying Islands", 583: "Micronesia", 584: "Marshall Islands", 585: "Palau", 586: "Pakistan", 591: "Panama", 598: "Papua New Guinea", 600: "Paraguay", 604: "Peru", 608: "Philippines", 612: "Pitcairn", 616: "Poland", 620: "Portugal", 624: "Guinea-Bissau", 626: "Timor-Leste", 630: "Puerto Rico", 634: "Qatar", 638: "Réunion", 642: "Romania", 643: "Russian Federation", 646: "Rwanda", 652: "Saint Barthélemy", 654: "Saint Helena, Ascension and Tristan da Cunha", 659: "Saint Kitts and Nevis", 660: "Anguilla", 662: "Saint Lucia", 663: "Saint Martin", 666: "Saint Pierre and Miquelon", 670: "Saint Vincent and the Grenadines", 674: "San Marino", 678: "Sao Tome and Principe", 682: "Saudi Arabia", 686: "Senegal", 688: "Serbia", 690: "Seychelles", 694: "Sierra Leone", 702: "Singapore", 703: "Slovakia", 704: "Viet Nam", 705: "Slovenia", 706: "Somalia", 710: "South Africa", 716: "Zimbabwe", 724: "Spain", 728: "South Sudan", 729: "Sudan", 732: "Western Sahara", 740: "Suriname", 744: "Svalbard and Jan Mayen", 748: "Swaziland", 752: "Sweden", 756: "Switzerland", 760: "Syrian Arab Republic", 762: "Tajikistan", 764: "Thailand", 768: "Togo", 772: "Tokelau", 776: "Tonga", 780: "Trinidad and Tobago", 784: "United Arab Emirates", 788: "Tunisia", 792: "Turkey", 795: "Turkmenistan", 796: "Turks and Caicos Islands", 798: "Tuvalu", 800: "Uganda", 804: "Ukraine", 807: "Macedonia", 818: "Egypt", 826: "United Kingdom", 831: "Guernsey", 832: "Jersey", 833: "Isle of Man", 834: "Tanzania", 840: "United States of America", 850: "Virgin Islands", 854: "Burkina Faso", 858: "Uruguay", 860: "Uzbekistan", 862: "Venezuela", 876: "Wallis and Futuna", 882: "Samoa", 887: "Yemen", 894: "Zambia" };
var chainState = {};

/* EC */
function getImgUrl(pet) {
    return 'images/flags/' + pet + ".png";
}

Vue.component("page", {
    template: "#page",
    props: ["current", "allpage"],
    data: function () {
        console.log("page", this.current);
        return {
            showItem: 5,
            allpage: 13
        }
    },
    computed: {
        pages: function () {
            var pag = [];
            if (this.current < this.showItem) {
                var i = Math.min(this.showItem, this.allpage);
                while (i) {
                    pag.unshift(i--);
                }
            } else {
                var middle = this.current - Math.floor(this.showItem / 2),
                    i = this.showItem;
                if (middle > (this.allpage - this.showItem)) {
                    middle = (this.allpage - this.showItem) + 1
                }
                while (i--) {
                    pag.push(middle++);
                }
            }
            return pag
        }
    },
    methods: {
        goto: function (index) {
            if (index == this.current) return;
            this.current = index;
            this.$emit("pageChange", this.current);
            if(window.scrollTo){
                window.scrollTo( 0, 0 );
            }
        }
    }
})

Vue.filter('numberWithCommas', function (x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
})


Vue.filter('date', function (x) {
    return moment.utc(x).utcOffset(moment().utcOffset()).format("llll");;
})

var producerTags = {
    bitfinexeos1: ["Exchange"],
    eoshuobipool: ["Exchange"],
    zbeosbp11111: ["Exchange"],
    okcapitalbp1: ["Exchange"],
    eosantpoolbp: ["Mining pools"]
};

Vue.component("treemap", {
    template: "#treemap",
    props: ["data", "name"],
    data: function () {
        console.log("page", this.current);
        return {
            myChart: null
        }
    },

    mounted: function(){
        console.log(this.$refs.chart);
        this.myChart = this.$echarts.init(this.$refs.chart);
        this.renderChart();
    },

    watch:{
        data: function (newVal, oldVal) {
            this.renderChart();
        },
    },
    methods: {
        renderChart: function (index) {
            var myChart = this.myChart;
            var formatUtil = echarts.format;
            function getLevelOption() {
                return [
                    {
                        itemStyle: {
                            normal: {
                                borderColor: '#777',
                                borderWidth: 0,
                                gapWidth: 1
                            }
                        },
                        upperLabel: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        itemStyle: {
                            normal: {
                                borderColor: '#555',
                                borderWidth: 5,
                                gapWidth: 1
                            },
                            emphasis: {
                                borderColor: '#ddd'
                            }
                        }
                    },
                    {
                        colorSaturation: [0.35, 0.5],
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                gapWidth: 1,
                                borderColorSaturation: 0.6
                            }
                        }
                    }
                ];
            }


            console.log("data", this.data);

            myChart.setOption(option = {
                title: {
                    text: this.name,
                    left: 'center'
                },

                tooltip: {
                    formatter: function (info) {
                        var value = info.value;
                        var treePathInfo = info.treePathInfo;
                        var treePath = [];

                        for (var i = 1; i < treePathInfo.length; i++) {
                            treePath.push(treePathInfo[i].name);
                        }

                        return [
                            '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                            'Staked: ' + formatUtil.addCommas(value) + ' EOS',
                        ].join('');
                    }
                },

                series: [
                    {
                        name:'Voters',
                        type:'treemap',
                        visibleMin: 300,
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        upperLabel: {
                            normal: {
                                show: true,
                                height: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff'
                            }
                        },
                        levels: getLevelOption(),
                        data: this.data
                    }
                ]
            });
        }
    }
})


Vue.component("pie", {
    template: "#pie",
    props: ["data", "name", "subname"],
    data: function () {
        console.log("page", this.current);
        return {
            myChart: null
        }
    },

    mounted: function(){
        console.log(this.$refs.chart);
        this.myChart = this.$echarts.init(this.$refs.chart);
        this.renderChart();
    },

    watch:{
        data: function (newVal, oldVal) {
            this.renderChart();
        },
    },
    methods: {
        renderChart: function (index) {
            var myChart = this.myChart;
            var formatUtil = echarts.format;
            console.log("data", this.data);
            myChart.setOption({
                title : {
                    text: this.name,
                    subtext: this.subname,
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} EOS ({d}%)"
                },
                calculable : true,
                series : [
                    {
                        name:'Votes',
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false   //隐藏标示文字
                                },
                                labelLine : {
                                    show : false   //隐藏标示线
                                }
                            }
                        },
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data: this.data
                    }
                ]
            });
        }
    }
})

var axiosInstance = axios.create();
Vue.prototype.API = axiosInstance;
axiosInstance.defaults.params = {};
axiosInstance.defaults.baseURL = "https://api.voter.eosmedi.com/"

Vue.prototype.$echarts = echarts;

function isMobileResolution(){
    var width = window.innerWidth;
    if(width && width < 800){
        return true;
    }
    return false;
}

var isMobile = isMobileResolution();

window.onresize = function(evt){
    isMobile = isMobileResolution();
    console.log("isMobile", isMobile);
}

Vue.prototype.isMobile = isMobile;


var ProducersList = {
    template: "#producerList",
    props: ['chainState', 'filterProducers'],
    data: function () {
        var self = this;
        console.log('filterProducers', this.filterProducers);
        return {
            filterProducers: [],
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            countryCode: countryCode,
            loading: true,
            producers: [],
            tableData: [],
            request: true,
            multipleSelection: [],
            t: 0,
            status: null
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            console.log('ENtRO EN WAtCH');
            this.loading = true;
            this.getProducers();
        }
    },
    mounted: function () {
        console.log('ENtRO EN MOUNTED');
        setInterval(function () {
            self.getProducers(true);
        }, 80 * 1000);

        var self = this;

        if(this.$refs.page){
            this.$refs.page.$on("pageChange", function (data) {
                self.currentPage = data;
                console.log("pageChange", data);
            })
        }

        if(this.filterProducers && this.filterProducers.length){
            self.pageSize = 400;
        }

        this.getProducers();

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }
    },
    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        visuliazeProducers: function(){
            if(!this.multipleSelection.length){
                alert("please select one producer");
                return;
            }
            this.$router.push( { name: 'VoterStruct', params: { producers: this.multipleSelection.join(',') }})
        },
        handleSelectionChange: function (val) {
            console.log('handleSelectionChange', val);
            var selectedProducers = [];
            for(var key in val){
                selectedProducers.push(val[key].owner)
            }
            this.multipleSelection = selectedProducers;
        },
        clickProducer: function(row, index){
            Vue.set(row, "selected", !row.selected);
            var val = [];
            for(var key in this.tableData){
                if(this.tableData[key].selected) val.push(this.tableData[key]);
            }
            this.handleSelectionChange(val);
            console.log('clickProducer', row, val);
        },
        getProducers: function (isTimer) {
            console.log('ENTRO EN PRODUCERS');
            var self = this;
            if(isTimer && self.request){
                return;
            }
            this.request = true;
            var myComponent = this;
            this.API.get("getProducers"+ "?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                if(res.data.rows){
                    self.producers = res.data.rows;
                    self.totalPage = Math.ceil(res.data.total / self.pageSize);
                }else{
                    self.producers = res.data;
                }

                self.loading = false;
                self.request = false;

                var tableData = [];
                var indexCount = 0;

                for(var key in self.producers){
                    indexCount++;
                    var producer = self.producers[key];
                    var show = true;
                    if(self.filterProducers && self.filterProducers.indexOf(producer.owner) == -1){
                        show = false;
                    }

                    producer.show = show;
                    producer.voters =  producer.voters ?  producer.voters : 0;

                    producer.tags = [];

                    if(producerTags[producer.owner]){
                        producer.tags = [].concat(producerTags[producer.owner]);
                    }

                    if(producer.org_location &&  producer.org_location.country){
                        producer.tags.push(producer.org_location.country);
                    }
                    // console.log('producerTags[key]', producerTags[producer.owner]);
                    if(show){
                        tableData.push(producer);
                    }

                }

                self.tableData = tableData;
                // filterProducers && filterProducers.indexOf(voter.account_name) > -1
                var r = 0;
                for (var i in self.producers)
                    200 * (o = self.producers[i].total_votes / self.chainState.total_producer_vote_weight * 100) < 100 && (
                        r += parseFloat(self.producers[i].total_votes)
                    );
                self.t = r;



            })
        },
        cacluteReawrd: function(i, producer, chainState, r){
            var o, u = 0;
            parseInt(i) + 1 < 22 && (u += 318),
                u += producer.total_votes / (chainState.total_producer_vote_weight - r) * 100 * 200;
            var flag = 200 * (o = producer.total_votes / chainState.total_producer_vote_weight * 100) < 100;
            if(u < 100){
                u = 0;
            }
            return u.toFixed(0);
        },
        calculateVoteWeight: function() {
            var timestamp_epoch = 946684800000;
            var dates_ = (Date.now() / 1000) - (timestamp_epoch / 1000);
            var weight_ = Math.ceil(dates_ / (86400 * 7)) / 52;
            return Math.pow(2, weight_);
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}

var ProxyList = {
    template:"#ProxyList",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            loading: true,
            voters: [],
            status: null
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            console.log("pageChange", data);
        })
        this.getProxyVoters();

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProxyVoters();
        }
    },
    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        getProxyVoters: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoteProxy?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                self.voters = res.data.rows;
                self.loading = false;
                self.totalPage = Math.ceil(res.data.total / self.pageSize);
                console.log(res.data, self.totalPage, res.data.total / self.pageSize);
            })
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
};


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

var ProducerDetail = {
    template: "#producerDetail",
    props: ["chainState"],
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 20,
            loading: true,
            producer: {
            },
            removeChart: {},
            chainState: {},
            logFilters: null,
            voteLogs: null,
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            //console.log("pageChange", data);
        })

        this.getProducers();

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }

    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProducers();
        },
        $route: function (to, from) {
            this.loading = true;
            this.getProducers();
        }
    },
    methods: {
        /* EC */
        isLogFilter: function(){
          this.logFilters = this.$parent.logFilters;
          this.voteLogs = this.$parent.voteLogs;
          if(this.logFilters.producer && this.voteLogs != null){
                return true;
          }
        },
        filterLog: function(voteLog){
            voteLog.timeFormatted = moment.utc(voteLog.timestamp).utcOffset(moment().utcOffset()).format("llll");
            if(this.logFilters.producer){
                return voteLog.producers.indexOf(this.logFilters.producer) > -1
            }
            if(this.logFilters.voter){
                return voteLog.voter == this.logFilters.voter
            }

            return true;
        },
        /* END EC */

        getProducers: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getProducer/" + params.producer + "?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                self.producer = res.data;
                self.totalPage = Math.ceil(res.data.producer.voters / self.pageSize);
                self.loading = false;
                try{
                    self.calcutePieData();
                }catch(e){

                }
                //console.log(res.data);
            })
        },
        calcutePieData: function(){

            var removeChart = {
                name: "Remove voters",
                total: 0,
                data: []
            };

            var addChart = {
                name: "New voters",
                total: 0,
                data: []
            };

            var removeMap = {};
            var addMap = {};

            this.producer.removeLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;


                if(index == 0){
                    removeChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                removeChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!removeMap[row.voter]){
                    removeChart.total += value;
                    removeChart.data.push({ name: row.voter, value: value })
                }
                removeMap[row.voter] = 1;
            })


            this.producer.addLogs.forEach(function(row, index){
                var value =  row.info.voter_info.staked / 10000;
                if(index == 0){
                    addChart.first =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                }

                addChart.last =  moment.utc(row.timestamp).utcOffset(moment().utcOffset());
                if(!addMap[row.voter]){
                    addChart.data.push({ name: row.voter, value: value });
                    addChart.total += value;
                }
                addMap[row.voter] = 1;
            })

            removeChart.subname = "Total: "+numberWithCommas(removeChart.total.toFixed(0))+" EOS   Date Range: "+removeChart.first.format('YYYY-MM-DD') +" / "+removeChart.last.format('YYYY-MM-DD');
            addChart.subname = "Total: "+numberWithCommas(addChart.total.toFixed(0))+" EOS   Date Range: "+addChart.first.format('YYYY-MM-DD') +" / "+addChart.last.format('YYYY-MM-DD');

            this.removeChart = removeChart;
            this.addChart = addChart;

        },
        calculateVoteWeight: function() {
            var timestamp_epoch = 946684800000;
            var dates_ = (Date.now() / 1000) - (timestamp_epoch / 1000);
            var weight_ = Math.ceil(dates_ / (86400 * 7)) / 52;
            return Math.pow(2, weight_);
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}


var VoterList = {
    template:"#VoterList",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 20,
            loading: true,
            voters: [],
            status:null
        }
    },
    mounted: function () {
        var self = this;
        this.$refs.page.$on("pageChange", function (data) {
            self.currentPage = data;
            console.log("pageChange", data);
        })
        this.getProducers();

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            this.loading = true;
            this.getProducers();
        }
    },
    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        getProducers: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoters?p=" + this.currentPage + "&size=" + this.pageSize).then(function (res) {
                self.voters = res.data.rows;
                self.loading = false;
                self.totalPage = Math.ceil(res.data.total / self.pageSize);
                console.log(res.data);
            })
        },
        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}

var VoterDetail = {
    template: "#VoterDetail",
    props: ['chainState'],
    components: {
        'producers-list'  : ProducersList
    },
    data: function () {
        this.getVoter();
        return {
            chainState: chainState,
            loading: true,
            voter: {},
            eosClient: null,
            charts: [],
            status:null,
            querying: {

            }
        }
    },

    watch: {
        voter: function (newVal, oldVal) {
        },
        $route: function (to, from) {
            this.getVoter();
        }
    },

    mounted: function () {
        this.eosClient = Eos({
            chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
            httpEndpoint: 'https://api.eosmedi.com',
        });

        /* EC */
        if (typeof reloadTables === 'function'){
            reloadTables();
        }

    },

    methods: {
        isStatus: function(){
            this.status = this.$parent.status;
            if(this.status != null){
                return true;
            }
        },
        viewBlock: function(block, voteAction, index){
            var self = this;
            if(self.querying[block]){
                return;
            }

            self.querying[block] = true;
            this.eosClient.getBlock(block).then(function(block){
                self.querying[block] = false;
                voteAction.timestamp = block.timestamp;
                self.$set(self.voter.actions, index, voteAction);
                console.log(block, voteAction);
            })
            console.log('viewBlock', block);
        },

        getVoter: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("getVoter/" + params.voter).then(function (res) {
                self.voter = res.data;
                self.voter.actions = self.voter.actions || [];
                self.voter.actions = self.voter.actions.reverse();
                self.loading = false;
                var chartData =  self.voter.all_proxy_voters.map(function(v){
                    return {
                        name: v.voter,
                        value: v.staked/10000
                    }
                });

                self.charts.push({
                    chartName: self.voter.account_name + " Graph",
                    chartData: chartData
                });

                console.log(res.data);
            })
        },

        numberWithCommas: function(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }
    }
}




var VoterStruct = {
    template: '#VoterStruct',
    components: {
        'producers-list'  : ProducersList
    },
    data: function () {
        console.log("VoterStruct");
        this.getProducerData();
        return {
            chainState: chainState,
            data: [],
            loading: true,
            charts: []
        }
    },
    mounted: function () {

        // this.chartData = diskData;

    },
    watch: {
        voter: function (newVal, oldVal) {
        },
        $route: function (to, from) {
            this.getVoter();
        }
    },

    methods: {
        getProducerData: function () {
            var self = this;
            var params = this.$route.params;
            console.log(this.$router);
            this.API.get("voterCompare?producers="+params.producers).then(function (res) {
                self.data = res.data;
                self.loading = false;
                self.data.forEach(function(data){
                    var chartData =  data.voters.map(function(v){
                        return {
                            name: v.account_name,
                            value: v.staked/10000
                        }
                    });

                    self.charts.push({
                        chartName: data.producer.owner,
                        chartData: chartData
                    });

                })
                console.log(self.charts);
            })
        }
    }
}


var SubmitProxyInfo = {
    template: '#SubmitProxyInfo',
    props: ['eosClient', 'identity'],
    data: function () {
        console.log("SubmitProxyInfo");
        return {
            centerDialogVisible: false,
            dialogTitle: "",
            dialogMessage: "",
            form: {
            }
        }
    },
    mounted: function () {

        // this.chartData = diskData;


    },
    watch: {
        voter: function (newVal, oldVal) {
        },
        eosClient: function (to, from) {

            console.log("ready")
        },
        $route: function (to, from) {
            this.getVoter();
        }
    },

    methods: {
        onSubmit() {
            var self = this;

            if(!this.eosClient){
                this.$message({
                    message: 'Please attach an account',
                    type: 'warning'
                });
                return;
            }

            this.dialogTitle = "Info";

            this.centerDialogVisible = true;
            var identity = this.identity;
            console.log(identity);
            var firstAccount = identity.accounts[0];
            if(firstAccount){

            }


            this.dialogMessage = "Scatter will pop up a window let u accept Signature request...";

            var defData = {
                "proxy": firstAccount.name,
                "name": "",
                "slogan": "",
                "philosophy": "",
                "background": "",
                "website": "",
                "logo_256": "",
                "telegram": "",
                "steemit": "",
                "twitter": "",
                "wechat": ""
            };

            for(var k in this.form){
                defData[k] = this.form[k];
            }

            this.eosClient.transaction({
                actions: [
                    {
                        account: 'regproxyinfo',
                        name: 'set',
                        authorization: [{
                            actor: firstAccount.name,
                            permission: firstAccount.authority
                        }],
                        data: defData
                    }
                ]
            }).then(function(data){
                console.log(data.transaction_id);
                self.dialogMessage = "proxy info submit sucessed.<br>  TX:"+data.transaction_id;
            }, function(error){
                self.dialogMessage = "proxy info submit failed.<br> <span style='color:red'> "+error.message+"</span>";
                console.log("error", error)
            }).catch(function(error){
                error = JSON.parse(error);
                self.dialogMessage = "proxy info submit failed. <br> <span style='color:red'>"+error.error.details[0].message.split(":")[1]+"</span>";
                console.log("submmit error", error);
            })
        }
    }
}



var History = {
    template:"#History",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            loading: true,
            voters: []
        }
    },
    mounted: function () {

    },
    watch: {

    },
    methods: {

    }
};

var Referendum = {
    template:"#Referendum",
    data: function () {
        return {
            currentPage: 1,
            totalPage: 10,
            pageSize: 70,
            loading: true,
            voters: []
        }
    },
    mounted: function () {

    },
    watch: {

    },
    methods: {

    }
};


var routes = [
    {
        name: "ProducersList",
        path: '/', component: ProducersList },
    {
        name: "ProducerDetail",
        path: '/producer/:producer', component: ProducerDetail
    },
    {
        name: "VoterList",
        path: '/voters', component: VoterList
    },
    {
        name: "ProxyList",
        path: '/proxies', component: ProxyList
    },
    {
        name: "VoterDetail",
        path: '/voter/:voter', component: VoterDetail
    },
    {
        name: "VoterStruct",
        path: '/voterStruct/:producers', component: VoterStruct
    },
    {
        name: "SubmitProxyInfo",
        path: '/submit-proxy-info', component: SubmitProxyInfo,
        meta: { requireEosClient: true }
    },
    {
        name: "History",
        path: '/history', component: History
    },
    {
        name: "Referendum",
        path: '/referendum', component: Referendum
    }
]

var router = new VueRouter({
    routes: routes
})


router.afterEach(function(from, to){
    console.log(from, to)
    if(window.scrollTo){
        window.scrollTo( 0, 0 );
    }
})


var network = {
    blockchain: 'eos',
    host: 'mainnet.genereos.io', // ( or null if endorsed chainId )
    port: 443, // ( or null if defaulting to 80 )
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906", // Or null to fetch automatically ( takes longer )
}

var app = new Vue({
    router: router,
    data: function () {
        var self = this;
        self.getStatus();
        setInterval(function () {
            self.getStatus(true);
        }, 30 * 1000);

        self.getVoteLogs();
        setInterval(function () {
            self.getVoteLogs(true);
        }, 30 * 1000);

        return {

            status: {
                producers: 376,
                voters: 17515,
                proxy_voters: 81,
                percent_stacked: 30.383
            },
            countryCode: countryCode,
            requestStatus: true,
            requestLogs: true,
            chainState: {},
            logFilters: {},
            voteLogs: [],
            scatter: null,
            identity: null,
            eosClient: null
        }
    },
    mounted: function () {
        this.initliazeRoute();
        var self = this;
        if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) { // detect it's IE11
            window.addEventListener("hashchange", function(event) {
                var currentPath = window.location.hash.slice(1);
                if (self.$route.path !== currentPath) {
                    self.$router.push(currentPath)
                }
            }, false)
        }

        document.addEventListener('scatterLoaded', function(){
            console.log('scatterLoaded', window.scatter.identity)
            self.scatter = window.scatter;
            self.identity = window.scatter.identity;
        })

        console.log(this.$route)
    },

    watch: {
        $route: function (to, from) {

            console.log("$route", this.$route);
            this.initliazeRoute();
        },
        identity: function(){
            var self = this;
            try{
                if(self.identity){
                    self.identity.accounts.forEach(function(x){
                        if(x.blockchain == "eos"){
                            self.identity.name = x.name+"@"+x.authority;
                        }
                    })
                    self.eosClient = window.scatter.eos(network, Eos, {
                        broadcast: true,
                        sign: true,
                        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
                    },'https');
                }
            }catch(e){
                console.log(e);
            }

        }
    },

    methods: {

        connectScatter: function(){
            var self = this;
            console.log("connectScatter");
            this.scatter.getIdentity({
                accounts:[
                    {
                        chainId: network.chainId,
                        blockchain: network.blockchain
                    }
                ]
            }).then(function(){
                console.log('Attach Identity');
                console.log(self.scatter.identity);
                self.identity = window.scatter.identity;
                // this.setState({identity: window.scatter.identity});
            }).catch(function(error){
                console.error(error);
            });
        },

        signOut: function(){
            var self = this;
            console.log("connectScatter");
            this.scatter.forgetIdentity().then(function() {
                console.log('Detach Identity');
                self.identity = window.scatter.identity;
            }).catch(function(error){
                console.error(error);
            });
        },

        initliazeRoute: function(){
            var route = this.$route;
            this.logFilters = {};
            if(route.name == "ProducerDetail"){
                this.logFilters.producer = route.params.producer;
            }

            if(route.name == "VoterDetail"){
                this.logFilters.voter = route.params.voter;
            }
            console.log(this.logFilters, route);
        },

        filterLog: function(voteLog){
            voteLog.timeFormatted = moment.utc(voteLog.timestamp).utcOffset(moment().utcOffset()).format("llll");
            if(this.logFilters.producer){
                return voteLog.producers.indexOf(this.logFilters.producer) > -1
            }
            if(this.logFilters.voter){
                return voteLog.voter == this.logFilters.voter
            }


            return true;
        },

        getStatus: function (isTimer) {
            var self = this;
            var params = this.$route.params;

            if(isTimer && self.requestStatus){
                return;
            }

            this.requestStatus = true;
            this.API.get("getStatus").then(function (res) {
                self.status = res.data;
                self.requestStatus = false;
                self.chainState = self.status.chain_state;
                self.chainState.total_producer_vote_weight = parseInt(self.chainState.total_producer_vote_weight);
            })
        },

        getVoteLogs: function (isTimer) {
            var self = this;
            if(isTimer && self.requestLogs){
                return;
            }

            this.requestLogs = true;
            this.API.get("getVoteLogs").then(function (res) {
                self.requestLogs = false;
                self.voteLogs = res.data.reverse();
            })
        },
    }
}).$mount('#app')