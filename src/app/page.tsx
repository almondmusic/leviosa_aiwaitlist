import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <main>
        <TabNav />

        {/* 0) 상단 히어로(제목+리드) */}
        <div id="success-area">
          <HeroBanner
            titleLines={[
              "매출이 오를수록 더 바빠지는 셀러,",
              "그건 성장이 아니라 '병목'입니다",
            ]}
            leadLines={[
              "많은 셀러가 미래를 불안해한다. 나 역시 그랬다.",
              "매출은 늘었는데, 이상하게 시간은 더 사라졌다.",
              "그러던 어느 날, 운영을 사람 손에서 빼고",
              "'시스템'으로 옮기는 공식을 적용했고,",
              "매출은 유지되는데 실수·클레임·CS 스트레스가 급감했다.",
              "이 글은 그 전환점에 대한 이야기다.",
              "그리고 지금도 통하는 '셀러 자동화 공식'에 대한",
              "이야기이기도 하다.",
            ]}
            image1Src="/seller-operations.png"
            image1Alt="셀러 운영 화면 / 주문 폭주 / 엑셀 지옥"
            image2Src="/automation-dashboard.png"
            image2Alt="자동화 대시보드 / 안정화된 운영"
          />
        </div>

        {/* 1) 내 이야기(신뢰용 배경) — "왜 이 문제를 파고들었는가" */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-16">
            <h3
              id="intro-area"
              className="py-6 text-[20px] font-bold text-[#EF5555] md:text-[24px]"
            >
              왜 이 문제를 파고들었는가
            </h3>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>2020년, 나의 연봉은 3,000만 원이었다.</p>
              <p>
                개발자로 첫 커리어를 시작했고,
                <br />
                웹과 앱을 만들고, 배포를 하고, 서버를 운영했다.
              </p>
              <p>안정적이었다.</p>
              <p>하지만 빠르지는 않았다.</p>
              <p>그 무렵, 세상은 달라지고 있었다.</p>
              <p className="font-semibold text-gray-900">
                2021년, 시장은 &apos;불장&apos;이었다.
              </p>
              <p>주위 사람들이 돈을 벌기 시작했다.</p>
              <p>형들과 선배들은 말 그대로 분위기가 달라졌다.</p>
              <p className="rounded-lg bg-gray-100 px-4 py-2 italic">
                &quot;나 이번에 1억 넘겼어.&quot;
                <br />
                &quot;회사 연봉보다 코인이 더 낫다.&quot;
              </p>
              <p>
                그 말들이 반복될수록 내 3,000만원 연봉은
                <br />
                점점 작아보였다.
              </p>
              <p>나는 코드를 짜고 있었고, 그들은 차트를 보고 있었다.</p>
              <p>그때 처음으로 비교가 시작됐다.</p>
              <p className="font-medium">
                내가 뒤처지고 있는 건 아닐까?
                <br />
                나는 너무 느리게 가는 건 아닐까?
              </p>
              <p>
                돈이 어떻게 만들어지고, 어떻게 사라지는지에 대해서는
                <br />
                깊이 고민해본 적이 없었다.
              </p>
              <p>그런데 주변의 속도는 내 사고를 압도하기 시작했다.</p>
              <p className="font-semibold text-gray-900">
                결국 나도 들어갔다. 주식과 코인.
              </p>
              <p>처음엔 올랐다.</p>
              <p>그래프는 계속 위로 향했다.</p>
              <p>계좌가 커지는 걸 보며 나는 착각했다.</p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-[#EF5555]/5 px-4 py-2 font-medium">
                이게 실력이라고.
              </p>
              <p>하지만 감정으로 들어간 돈은 감정으로 무너졌다.</p>
              <p>하락장이 왔고, 나는 버티지 못했다.</p>
              <p className="font-semibold text-[#EF5555]">
                결과는 1억 원이 넘는 빚.
              </p>
              <p>그때 처음으로 깨달았다.</p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-medium">
                열심히 일한 돈은 느리지만 단단했고,
                <br />
                감정으로 번 돈은 빠르지만 쉽게 무너졌다.
                <br />
                <span className="font-semibold text-gray-900">
                  돈은 속도가 아니라 구조에서 나오는 거구나.
                </span>
              </p>
              <p className="font-semibold text-gray-900">
                2022년, 나는 두나무에 입사했다.
              </p>
              <p>
                운명의 장난처럼, 나에게 빚을 안겨준 코인을 거래하는
                <br />그 거래소에서 일하게 됐다.
              </p>
              <p>연봉 1억.</p>
              <p>
                나는 개발자로 일했고, 시스템을 만들었고, 안정적인 월급을 받았다.
              </p>
              <img
                src="/dunamu_100k.png"
                alt="두나무"
                className="my-2 w-full max-w-[800px] rounded-lg"
              />
              <p>그 돈으로 빚을 갚았다.</p>
              <p>분명 회복이었다.</p>
              <p>하지만 또 하나의 질문이 남았다.</p>
              <p className="italic">
                야근을 하던 어느 날 문득 이런 생각이 들었다.
              </p>
              <p className="rounded-lg bg-gray-100 px-4 py-2 font-medium">
                &quot;내가 출근하지 않으면 이 돈은 들어오지 않겠구나.&quot;
              </p>
              <p>연봉이 3,000만 원에서 1억이 되어도 구조는 같았다.</p>
              <p className="font-semibold">노동을 멈추면, 수익은 멈춘다.</p>
              <p>그때 두 번째로 깨달았다.</p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-medium">
                고연봉은 안정일 뿐, 자유는 아니다.
                <br />
                <span className="font-semibold text-gray-900">
                  자유는 내가 없어도 돌아가는 구조에서 나온다.
                </span>
              </p>
              <p className="font-semibold text-gray-900">
                2023년, 나는 다시 시작했다. 이번에는 셀러였다.
              </p>
              <p>
                상품을 등록하고, 가격을 수정하고, 주문을 확인하고,
                <br />
                운송장을 입력하고, CS를 처리했다.
              </p>
              <p>처음에는 단순 노동처럼 보였다.</p>
              <p>하지만 매출이 오르기 시작하자 상황이 달라졌다.</p>
              <p>어느 날이었다.</p>
              <p>하루 주문이 갑자기 50건을 넘었다.</p>
              <p>
                그날 밤 나는 배송 누락을 냈고, 가격 수정 타이밍을 놓쳤고, CS
                응답이 밀렸다.
              </p>
              <p className="font-medium">그 순간 의문이 들었다.</p>
              <p className="rounded-lg border border-[#EF5555]/60 bg-[#EF5555]/10 px-4 py-3 font-medium">
                매출이 늘수록 왜 더 불안해지는 거지?
              </p>
              <p>며칠 뒤 계산을 해봤다.</p>
              <p>상품 50000개 · 하루 주문 40~60건 · 가격 변동 수십 건</p>
              <p>
                이걸 사람이 붙잡고 관리한다는 것 자체가
                <br />
                이미 구조적으로 무너질 수밖에 없는 상태였다.
              </p>
              <p>그때 처음으로 강하게 깨달았다.</p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-semibold text-gray-900">
                이건 노력의 문제가 아니라 구조의 문제다.
                <br />
                감정과 집중력에 의존하는 운영은
                <br />
                언젠가 반드시 터진다.
              </p>
              <p>나는 개발자였다.</p>
              <p>그래서 방향은 명확했다.</p>
              <p className="font-medium">
                사람이 붙잡고 있는 것을 시스템이 처리하게 만들자.
              </p>
              <p>
                반복을 코드로 바꾸고, 판단을 로직으로 만들고,
                <br />
                운영을 자동화 흐름으로 설계했다.
              </p>
              <p>그 결과는 단순했다.</p>
              <ul className="space-y-2 rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-medium">
                <li>수동 작업 시간 급감</li>
                <li>가격 실수 0에 수렴</li>
                <li>주문 처리 누락 감소</li>
                <li>그리고 월매출 1억 돌파</li>
              </ul>
              <p>이건 재능의 결과가 아니었다.</p>
              <p>운의 결과도 아니었다.</p>
              <p className="text-[18px] font-bold text-[#EF5555] md:text-[20px]">
                구조의 결과였다.
              </p>
            </div>
          </div>
        </section>

        {/* 2) 사건(의문) — "이게 맞나?" */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              이게 맞나?
            </h3>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>당시 가장 자주 들었던 말이 있었다.</p>
              <p className="rounded-lg bg-white/10 px-4 py-3 italic">
                &quot;매출이 늘면 바빠지는 게 당연하죠.&quot;
              </p>
              <p>근데 현실은 다르다.</p>
              <p>잘 되는 셀러일수록 오히려 운영이 더 안정적이다.</p>
              <p className="font-semibold text-[#EF5555]">
                이게 말이 되나 싶어서, 나는 질문을 바꿨다.
              </p>
              <p className="rounded-lg border border-[#EF5555]/60 bg-[#EF5555]/10 px-4 py-3 font-medium">
                &quot;바쁜 건 성장이 아니라,
                <br />
                시스템이 없다는 신호 아닐까?&quot;
              </p>
            </div>
          </div>
        </section>

        {/* 3) 깨달음(핵심 문장 2~3개) */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              결론은 명확했다
            </h3>
            <div className="mt-8 space-y-6 text-[17px] font-semibold leading-[1.8] text-gray-900 md:text-[19px]">
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;운영&apos;을 사람으로 하면,
                <br />
                매출이 커질수록 망가진다.
              </p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;자동화&apos;는 편의가 아니라 생존이다.
              </p>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3">
                &apos;노출(트래픽)&apos;이 아니라,
                <br />
                &apos;운영 시스템&apos;이 수익을 만든다.
              </p>
            </div>
          </div>
        </section>

        {/* 4) 현실(공감) — "대부분의 셀러가 겪는 지옥" */}
        <section className="bg-[#2A2A2A]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              대부분의 셀러가 겪는 지옥
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>매출이 커질수록 반복되는 패턴이 있다.</p>
              <ul className="space-y-2">
                <li>상품 1000개 → 수정 요청 폭증 → 누락</li>
                <li>주문 50건 → 송장/배송 실수 → 클레임</li>
                <li>가격 변경 → 수동 체크 → 패널티 위험</li>
                <li>CS 폭주 → 감정 소모 → 운영 품질 붕괴</li>
              </ul>
              <p>사람 중심 운영은 결국 이렇게 된다.</p>
              <p className="text-[#EF5555]/90">
                동시에 여러 일을 못함 → 피로 누적 → 실수 증가 → 신뢰 하락 → 매출
                하락
              </p>
              <p className="font-semibold">이커머스에서 실수는 치명적이다.</p>
            </div>
          </div>
        </section>

        {/* 5) "90%가 막히는 이유" 섹션 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <div className="flex flex-col gap-4">
              <hr className="border-black-500" />
              <h3 className="whitespace-pre-wrap text-2xl font-bold text-[#FF6E78]">
                90%의 실패와 10%의 성공, 그 허상을 깨다
              </h3>
              <hr />
            </div>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>
                새로 시작한 셀러의 90%가 특정 구간에서 멈춘다.
                <br />
                노하우가 없어서가 아니다. 의지가 약해서도 아니다.
              </p>
              <p className="rounded-lg border-2 border-[#EF5555] bg-[#EF5555]/5 px-4 py-3 font-semibold">
                그냥 &quot;운영을 수동으로 시작&quot;했기 때문이다.
              </p>
              <p>
                초반엔 된다.
                <br />
                하지만 어느 순간부터는
                <br />
                상품/주문/CS가 늘어나는 속도가
                <br />
                사람이 처리 가능한 속도를 이긴다.
              </p>
            </div>
          </div>
        </section>

        {/* 6) 패러다임 전환 — "성공은 매출이 아니라 시스템" */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              성공은 매출이 아니라 시스템
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>여기서 방향을 바꾸면 결과가 달라진다.</p>
              <ul className="space-y-2">
                <li>&quot;내가 더 열심히&quot; → &quot;반복을 없애기&quot;</li>
                <li>
                  &quot;실수 안 하기&quot; → &quot;실수가 나올 수 없는
                  구조&quot;
                </li>
                <li>
                  &quot;운영 잘 하기&quot; → &quot;운영을 자동으로 굴리기&quot;
                </li>
              </ul>
              <p className="font-semibold text-[#EF5555]">
                이때부터 매출은 목표가 아니라 결과가 된다.
              </p>
              {/* 이미지 1장 영역 */}
              <div className="mt-10 overflow-hidden rounded-lg">
                <img
                  src="/automatic_operation.gif"
                  alt="운영이 자동으로 돌아가는 흐름도 (상품/가격/재고/주문/CS)"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7) 건물의 기초 비유 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              기초공사부터 탄탄히 하자
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p>성공은 고층 빌딩과 같다.</p>
              <p>
                높이를 올리고 싶다면 위를 쌓는 게 아니라
                <br />
                기초를 먼저 깊게 파야 한다.
              </p>
              <p>
                겉으로 보이는 성과는 위층이다.
                <br />
                보이지 않는 역량이 기초다.
              </p>
              <p className="font-semibold">기초가 얕으면 높이는 제한된다.</p>
              <p className="font-medium">예를 들어 이런 기초들이다.</p>
              {/* 5가지 예시 + 이미지 (기초 판자처럼 이미지 주위에 5가지 배치) */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                <ul className="flex-1 space-y-2 text-[15px] md:text-[16px]">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#EF5555]" />
                    상품 등록 속도
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#EF5555]" />
                    가격/재고 싱크 정확도
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#EF5555]" />
                    주문 처리 누락률
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#EF5555]" />
                    CS 응답 속도
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#EF5555]" />
                    플랫폼별 정책/제재 리스크
                  </li>
                </ul>
                <div className="relative mx-auto w-[200px] shrink-0 md:mx-0 md:w-[220px]">
                  <img
                    src="/building_design.jpg"
                    alt="건물 기초 설계"
                    className="w-full rounded-lg border border-neutral-200 shadow-md"
                  />
                  <span className="absolute -top-1 left-0 right-0 text-center text-[11px] font-semibold text-[#EF5555] md:text-xs">
                    상품 등록 속도
                  </span>
                  <span className="absolute top-1/2 -right-8 max-w-[72px] text-right text-[10px] font-semibold text-neutral-600 md:-right-10 md:text-[11px]">
                    가격/재고 싱크
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 text-center text-[10px] font-semibold text-neutral-600 md:text-[11px]">
                    주문 처리 누락률
                  </span>
                  <span className="absolute bottom-1/3 -left-7 max-w-[56px] text-[10px] font-semibold text-neutral-600 md:-left-8 md:text-[11px]">
                    CS 응답 속도
                  </span>
                  <span className="absolute right-0 bottom-2 -right-6 max-w-[64px] text-right text-[10px] font-semibold text-neutral-600 md:-right-8 md:text-[11px]">
                    정책/제재 리스크
                  </span>
                </div>
              </div>
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-semibold">
                목표는 &quot;월매출 1억&quot;이 아니라,
                <br />
                기초를 먼저 깊게 파고,
                <br />
                가장 약한 기초를 자동화로 보강하는 것이다.
              </p>
            </div>
          </div>
        </section>

        {/* 8) 해결책(제품) — 레비오사 AI */}
        <section className="bg-[#2A2A2A]">
          <div className="mx-auto max-w-[720px] px-4 py-6 md:py-20">
            <h3
              id="faq-area"
              className="text-[20px] font-bold text-[#EF5555] md:text-[24px] py-6"
            >
              레비오사 AI는 뭐냐?
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-white/95 md:text-[18px]">
              <p>
                레비오사 AI는 셀러들을 위한 AI 자동화 프로그램이다.
                <br />
                셀러가 매일 반복하는 운영 업무를
                <br />
                조건에 따라 자동 실행해,
                <br />
                실수와 시간을 줄이고, 매출이 커져도
                <br />
                운영이 무너지지 않게 만든다.
              </p>
              {/* <p className="font-medium text-white">예시 (기대효과):</p> */}
              <ul className="ml-4 list-disc space-y-1">
                <li>상품 대량 등록/수정 자동화</li>
                <li>가격/재고 변화 감지 → 자동 반영</li>
                <li>주문/배송 처리 루틴 자동화</li>
                <li>반복 CS 템플릿/분류 자동화</li>
                <li>&quot;사람이 마지막 승인만 하는&quot; 운영 구조</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9) 대기 혜택 */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-4 py-12 md:py-20">
            <h3 className="text-[20px] font-bold text-[#EF5555] md:text-[24px]">
              대기 신청하면 받는 것
            </h3>
            <div className="mt-8 space-y-6 text-[16px] leading-[1.9] text-gray-800 md:text-[18px]">
              <p className="rounded-lg border-l-4 border-[#EF5555] bg-gray-50 px-4 py-3 font-semibold">
                셀러 운영 병목 진단 체크리스트 (기초 진단)
                <br />
                <br />
                자동화 우선순위 로드맵 (무엇부터 해야할까?)
                <br />
                <br />
                레비오사 AI 초기 기능 우선 사용 권한 (순차 오픈)
              </p>
            </div>
          </div>
        </section>

        {/* 10) 최종 CTA + 11) 보너스 문장 */}
        <section className="bg-[#1a1a1a]">
          <div className="mx-auto max-w-[720px] px-4 py-16 md:py-24">
            {/* 보너스 문장 */}
            <p className="mb-6 text-center text-[15px] font-medium italic text-white/80 md:text-[17px]">
              &quot;사람으로 버티는 순간, 성장은 리스크가 됩니다.&quot;
            </p>

            {/* 중앙 문구(2줄) */}
            <p className="text-center text-[18px] font-bold leading-[1.6] text-white md:text-[22px]">
              대기 신청만 하셔도,
              <br />
              셀러 운영병목 진단자료를 바로 받아볼 수 있습니다.
              <br />
              직접 적용해보세요. 👇
            </p>

            {/* 버튼 */}
            <div className="mt-10 flex justify-center">
              <CTAButton
                variant="primary"
                size="lg"
                label="무료 진단 자료 받고 대기 신청하기"
              />
            </div>
          </div>
        </section>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 z-20 w-full md:bottom-[30px]">
          <div className="mx-auto max-w-[1000px] rounded-none border border-[#363636] bg-[#363636] px-[30px] py-5 shadow-lg md:rounded-lg md:px-[50px] md:py-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white md:text-lg">
                  무료 진단 자료 받고 대기 신청하기
                </p>
                <p className="text-sm font-medium text-[#DADADA]">
                  (셀러 운영 병목 진단 자료를 바로 받아볼 수 있습니다)
                </p>
              </div>
              <CTAButton variant="secondary" size="md" label="대기 신청" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
