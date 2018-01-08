/**
 * Created by yangshibin on 2017/11/21.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import {AppService} from "../app.service";

@Component({
  templateUrl: './investment-page.html',
  styleUrls: ['./investment.css']
})

export class InvestmentComponent implements OnInit, AfterViewInit {
  infobanList = [];
  philosophyList = [];
  showMask = false;
  showEnterprise = null;
  enterpriseList = [];  // 企业列表
  enterpriseListEn = [];
  constructor(private router: Router, private elm: ElementRef, public appService: AppService) {}
  ngOnInit() {
    this.infobanList = [1, 2, 3, 4, 5, 6];
    this.enterpriseList = [{index: 1, img: 'assets/image/investment/imgPinBa.png', logo: 'assets/image/investment/img421.png', introduce: `
    聘吧：聘吧是大马首创的社交媒体平台。聘吧以个人技能，人才需求，及社交为导向，开创了这款手机应用程序，造福蓝领人士、自由工作者及社会新鲜人等等。聘吧在10月15
    日在马来西亚正式推介。目前已于几所大学学府及政府机构签署了备忘录。聘吧目前有超过两万个具备各种不同技能的用户。聘吧正在积极筹备向亚太区发展，广泛的把聘吧带到
    世界的每一个角落成为每个人必备的招工找工平台。`},
      {index: 2, img: 'assets/image/investment/imgEntertainment.png', logo: 'assets/image/investment/img422.png', introduce: `
    摩罗影视文化传媒：业务版图包括电影制作、音乐发行、艺人网红经纪、互联网新媒体等。目前已投入第一部院线电影（致富计划），邀请了中国、台湾、马来西亚及新加坡的
    演员及电影制作团队参与制作，预计2018年10月份在全马各大院线上映，并于中国爱奇艺视频平台上线。`},
      {index: 3, img: 'assets/image/investment/imgCoMo.png', logo: 'assets/image/investment/imgMergeSpace.png', introduce: `
    MergeSpace微合空间：总部设立于马来西亚吉隆坡，拥有超过1000平方的共享办公空间。为企业提供场地、融资、招聘及各种创业资源等服务，实现企业加速发展的目的。
    除此之外，对于优秀企业MergeSpace将通过战略持股，为企业的发展提供长期孵化，并在未来一同享受企业成长带来的回报`},
      {index: 4, img: 'assets/image/investment/imgKioda.png', logo: 'assets/image/investment/img424.png', introduce: `
    KIODA可爱优品：定位于韩国快时尚休闲百货品牌，2016年创立于马来西亚，并在1年半的时间迅速发展超过40家门店，目前已进入印度、印尼、菲律宾、越南、哈萨克斯坦、
    吉尔吉斯斯坦及新加坡等国家。2017年营业额已达到1000万美元。计划未来三年开设1000家门店并于美国主板上市。`},
      {index: 5, img: 'assets/image/investment/imgProperty.png', logo: 'assets/image/investment/img425.png', introduce: `
     摩罗地产：专注旅游地产开发，2017年10月份正式与柬埔寨政府联合发布新闻，正式于柬埔寨西港投入总值7700万美元的综合商业大厦，建设包括：商业办公楼、豪华公寓、
              五星级酒店和大型购物商城。未来摩罗地产将放眼发展中国家的发展建设，为改善当地环境及提升生活品质做贡献。`}];
    this.enterpriseListEn = [{index: 1, img: 'assets/image/investment/imgPinBa.png', logo: 'assets/image/investment/img421.png', introduce: `
    PINBA: PINBA is a revolutionary job seeking and talent hunting social media mobile application from Malaysia. This brings a whole new era 
    to underrated talents like blue coloured workers, freelancers and fresh graduates to display their talents to their future employees. After
     its official launch on the 15th October 2017 in Malaysia, PINBA has collaborated with several universities and government agencies that
      recognise its benefits. Within a short period of time PINBA has already achieved over 20,000 active users with different skillsets. PINBA 
      is now preparing to spread its wings across the asia pacific region and the rest of the world to connect talents and hirers globally to 
      become the must have mobile app for everyone.`},
      {index: 2, img: 'assets/image/investment/imgEntertainment.png', logo: 'assets/image/investment/img422.png', introduce: `
   Morow Pictures: Morow Pictures is a multimedia company that includes movie production, music production and distribution, artists’ management,
    internet marketing, etc. Its first Movie (Being Rich) is a large scaled collaboration between talents from China, Taiwan, Malaysia and Singapore
     and it is projected to on the silver screens in Malaysia by October 2018. It will also be screened in iQiyi (a leading video streaming 
     platform in China).`},
      {index: 3, img: 'assets/image/investment/imgCoMo.png', logo: 'assets/image/investment/imgMergeSpace.png', introduce: `
    MergeSpace微合空间：总部设立于马来西亚吉隆坡，拥有超过1000平方的共享办公空间。为企业提供场地、融资、招聘及各种创业资源等服务，实现企业加速发展的目的。
    除此之外，对于优秀企业MergeSpace将通过战略持股，为企业的发展提供长期孵化，并在未来一同享受企业成长带来的回报`},
      {index: 4, img: 'assets/image/investment/imgKioda.png', logo: 'assets/image/investment/img424.png', introduce: `
   KIODA: KIODA is positioned as Korea’s fastest growing trendy merchandise departmental store. Launched in Malaysia in 2016, it has 
   rapidly grown into a household brand with over 40 shops all over Malaysia. Currently it has penetrated into India, Indonesia, Philippines,
    Vietnam, Kazakhstan, Kyrgyzstan, Singapore and other countries. In 2017 its revenue has already surpassed 10 million USD. Over 1000 more branches 
    will be opened over the next 3 years and it is also projected to be listed in America within this time frame.`},
      {index: 5, img: 'assets/image/investment/imgProperty.png', logo: 'assets/image/investment/img425.png', introduce: `
     Morow Property Management: Focuses on property development in tourist centric cities. On October 2017 together with the Cambodian government, 
     it has announced its 77 million mega project on the coast of Sihanoukville. The commercial building will be comprised of luxury apartments, 
     five star hotels and a shopping mall. Future projects will be focused at developing countries', in order to improve the local environment, improve 
     the quality of life and create job oppertunities for its citizens.
`}];

    this.philosophyList = [{title: {zh: '专门利人，得以利己', en: 'By benefiting others, we are benefiting ourselves'},
      content: {zh: '我们以诚信为准则，用专业标准评估，为企业及合伙人创造利益价值最大化。', en: `We will evaluate all projects with professionalism 
      and integrity to make the most accurate and beneficial decision for all our partners to maximize our returns.`}},
      {title: {zh: '注重行业与企业本生', en: 'Utmost attention to details will be given'},
        content: {zh: '关注企业所在产业行业本生增长潜力，关注企业本生竞争优势和独特性。', en: `Projects will be studied in detail to draw its pull 
        potential and presented with cutting edge unique selling propositions.`}},
      {title: {zh: '投资既是投人', en: 'The success of an investment depends on the people behind it'},
        content: {zh: '我们坚信优秀的领导者和正确的团队，才能创造出伟大的企业。', en: `We firmly believe that the success of an enterprise strongly 
        depends on the people that built it.`}}];
  }
  ngAfterViewInit() {
    this.setInvestHeight();
    this.setMotorImgHeight();
    this.setSliderHeight();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
       // console.log(document.body.clientWidth);
        // 这里处理页面变化时的操作
        this.setInvestHeight();
        this.setMotorImgHeight();
        this.setSliderHeight();
      });
  }
  showIntroduce(enterprise) {
    if (document.body.clientWidth > 800) {
      return;
    }
    this.showEnterprise = enterprise;
    this.showMask = true;
  }
  setSliderHeight() {
    const slider = this.elm.nativeElement.querySelector('.mr-pic-slider');
    if (slider) {
      const width = slider.clientWidth;
      slider.style.height = width * 0.52 + 'px';
    }
  }
  setInvestHeight() {
    const posters = this.elm.nativeElement.querySelectorAll('.invest-wrap');
    posters.forEach(value => {
      const width = value.clientWidth;
      value.style.height = width * 0.7143 + 'px';
    });
  }
  setMotorImgHeight() {
    const posters = this.elm.nativeElement.querySelectorAll('.invest-block-sm');
    posters.forEach(value => {
      const width = value.clientWidth;
      value.style.height = width * 0.6136 + 'px';
    });
  }
  routeGo() {
    this.router.navigateByUrl('home');
  }

}
