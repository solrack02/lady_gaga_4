

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[
        `{ flex: 1, backgroundColor: "$var_all.colors.primary" }`, `{   alignItems: "center",   justifyContent: "center" }`],

          screenElements:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ fontSize: 22, color: "#FFF", textAlign: "center" }`
          ],

          children: [
            `Find Your Favorite Music`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "darkred",
  alignItems: "center",
  justifyContent: "center",
  width: 160,
  height: 28,
  borderRadius: 5,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("player");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "center",
  fontWeight: "bold",
}`
          ],

          children: [
            `Ir p/ Player`
          ],

          args,

        }}/>],

            args,
          }}/>
        , () => {
	const targetDate = '2025-12-31T23:59:59';
	const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: '00', minutes: '00', seconds: '00' });

	const style_1 = { alignItems: 'center', justifyContent: 'center' };
	const style_days = { fontSize: 48, fontWeight: 'bold', color: '#FFF' };
	const style_time = { fontSize: 32, color: '#FFF' };

	const formatTime = (time) => { 
		const days = Math.floor(time / (3600 * 24)); 
		const hours = String(Math.floor((time % (3600 * 24)) / 3600)).padStart(2, '0'); 
		const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0'); 
		const seconds = String(time % 60).padStart(2, '0'); 

		return { days, hours, minutes, seconds }; 
	};

	React.useEffect(() => { 
		const countdown = () => { 
		const now = new Date().getTime(); 
		const target = new Date(targetDate).getTime(); 
		if (isNaN(target)) { 
			setTimeLeft({ days: 0, hours: '00', minutes: '00', seconds: '00' }); 
			return; 
	} 
		const distance = target - now; if (distance <= 0) { setTimeLeft({ days: 0, hours: '00', minutes: '00', seconds: '00' }); return; } 
		const timeInSeconds = Math.floor(distance / 1000); 
		const { days, hours, minutes, seconds } = formatTime(timeInSeconds); setTimeLeft({ days, hours, minutes, seconds }); }; 
		const intervalId = setInterval(countdown, 1000); return () => clearInterval(intervalId); 
	}, [targetDate]);

	return (
		<RN.View style={style_1}>
			<RN.Text style={style_days}>{timeLeft.days} DAYS</RN.Text>
			<RN.Text style={style_time}>{timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds} LEFT</RN.Text>
		</RN.View>
	);
}],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"player",

          styles:[`{ flex: 1, backgroundColor: "$var_all.colors.primary" }`],

          screenElements:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{ width: "100%", height: "100%", position: "absolute" }],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/bg_red.png?alt=media&token=7d654b53-c619-4dc1-94d5-d77fd5cd4420`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", height: 18, backgroundColor: "#000" }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "$var_all.colors.primary",
  alignItems: "center",
  width: "100%",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 34,
  height: 34,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("home");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="red"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
  alignItems: "center"
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "left",
}`
          ],

          children: [
            `Now Playing`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 34,
  height: 34,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ alignItems: "center", justifyContent: "center", minHeight: 220 }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{ width: 150, height: 150, borderRadius: 5 }],

      URIvariablePath:[`https://4kwallpapers.com/images/wallpapers/lady-gaga-1920x1200-16726.jpeg`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
        `{
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
}`, `{ paddingHorizontal: 20 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 40,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M17.367 3.842a4.583 4.583 0 0 0-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.585 4.585 0 0 0 0-6.483v0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, alignItems: "center" }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#fff" }`
          ],

          children: [
            `Lady Gaga`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "#263238", fontSize: 12 }`
          ],

          children: [
            `Just Dance`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 40,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , () => {
	const [sttPlay, setPlay] = React.useState(false);

	const img_prev =
		'https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/skip-back.png?alt=media&token=c5830632-862b-4f42-9328-f6821c1272b9';
	const img_play =
		'https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/play.png?alt=media&token=51941cc8-1252-4c83-a6f7-4ce2f2b6f9a9';
	const img_pause =
		'https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/pause.png?alt=media&token=1d906bb6-6ea0-4fae-9d7f-3dfcc5e50e2f';
	const img_next =
		'https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/skip-forward.png?alt=media&token=66c23108-b7d2-4a6e-8435-4aaba8184a9c';

	const style_1 = {
		flexDirection: 'row',
		width: '100%',
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
	};
	const style_2 = {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		width: 20,
		height: 20,
	};
	const style_3 = {
		backgroundColor: 'darkred',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		width: 40,
		height: 40,
		marginHorizontal: 20
	};
	const style_4 = {
		width: 20,
		height: 20,
		alignItems: 'center',
		letterSpacing: 'center',
	};

	return (
		<RN.View style={style_1}>
			<RN.TouchableOpacity style={style_2} onPress={() => {}}>
				<RN.Image source={{ uri: img_prev }} style={style_4} />
			</RN.TouchableOpacity>

			<RN.TouchableOpacity style={style_3} onPress={() => setPlay(!sttPlay)}>
				{sttPlay ? (
					<RN.Image source={{ uri: img_play }} style={style_4} />
				) : (
					<RN.Image source={{ uri: img_pause }} style={style_4} />
				)}
			</RN.TouchableOpacity>

			<RN.TouchableOpacity style={style_2} onPress={() => {}}>
				<RN.Image source={{ uri: img_next }} style={style_4} />
			</RN.TouchableOpacity>
		</RN.View>
	);
}],

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"teste",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: "row",
  backgroundColor: "#0064fe",
  alignItems: "center",
  width: "100%",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `i`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  textAlign: "center",
}`
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `i`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        () => {
	const [sttNumber, setNumber] = React.useState(20);

	const style_1 = {
		backgroundColor: "yellow",
		flexDirection: "row",
		flex: 1,
		width: 200,
		alignItems: "center",
		justifyContent: "center"
	};

	const style_2 = {
		backgroundColor: "#0064FE",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		width: 20,
		height: 20
	};
	
	const style_3 = {
		marginHorizontal: 20
	};

	const style_4 = {
		color: "#FFF",
		lineHeight: 0
	};

	return (
		<RN.View style={style_1}>
			<RN.Pressable style={style_2} onPress={() => setNumber(i => Math.max(0, i - 1))}>
				<RN.Text style={style_4}>-</RN.Text>
			</RN.Pressable>

			<RN.Text style={style_3}>{sttNumber}</RN.Text>

			<RN.Pressable style={style_2} onPress={() => setNumber(i => i + 1)}>
				<RN.Text style={style_4}>+</RN.Text>
			</RN.Pressable>
		</RN.View>
	);
}, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ fontSize: 96, fontWeight: "100" }`
          ],

          children: [
            "Escreva..."
          ],

          args,

        }}/>],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#000", 'secondary': "red" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1"},{name: "Task 2"}] } 
, 
'name': "Name:", 'dataToSet': {name: "Carlos", phone: "1111"} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
