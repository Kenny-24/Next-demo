'use client';

import Header from '../ui/Header';

export default function GlobalNav() {
  return (
    <div>
      <Header children={<span>666</span>} />;
    </div>
  );
}
// export default function GlobalNav() {
//   const [selectedLayoutSegments] = useSelectedLayoutSegments();

//   return (
//     <div>
//       {/* {demos.map((demo) => {
//         return (
//           <div key={demo.name}>
//             <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
//               <div>{demo.name}</div>
//             </div>

//             {demo.items.map((item) => {
//               const isActive = item.slug === selectedLayoutSegments;

//               return (
//                 <div key={item.slug}>
//                   {item.isDisabled ? (
//                     <div
//                       className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600"
//                       title="Coming Soon"
//                     >
//                       {item.name}
//                     </div>
//                   ) : (
//                     <Link
//                       href={`/${item.slug}`}
//                       className={clsx(
//                         'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
//                         { 'text-zinc-200': !isActive, 'text-white': isActive },
//                       )}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })} */}
//       <header className="space-x-5 p-10 flex bg-indigo-800">
//         CodingTalk
//         <Link
//           href="/"
//           className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
//         >
//           Home
//         </Link>
//         <Link
//           href="/kun"
//           className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
//         >
//           View
//         </Link>
//         <Link
//           href="/todos"
//           className="bg-pink-500 flex justify-center text-blue-100 rounded-lg w-20 py-1"
//         >
//           Todos
//         </Link>
//       </header>
//     </div>
//   );
// }
