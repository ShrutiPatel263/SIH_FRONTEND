@@ .. @@
   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
-      className="fixed top-0 w-full z-50 glass-effect border-b border-white/20"
+      className="fixed top-0 w-full z-50 glass-effect border-b border-white/20 py-2"
     >
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="flex justify-between items-center h-16">
+      <div className="max-w-7xl mx-auto px-6 lg:px-8">
+        <div className="flex justify-between items-center h-16 lg:h-18">
           {/* Logo */}
           <motion.div
             whileHover={{ scale: 1.05 }}
-            className="flex items-center space-x-2"
+            className="flex items-center space-x-3"
           >
-            <div className="text-3xl animate-bounce-slow">🌍</div>
-            <span className="text-xl font-bold text-gradient">EcoLearn</span>
+            <div className="text-2xl md:text-3xl animate-bounce-slow">🌍</div>
+            <span className="text-lg md:text-xl font-bold text-gradient">EcoLearn</span>
           </motion.div>

           {/* Desktop Navigation */}
-          <div className="hidden md:flex items-center space-x-1">
+          <div className="hidden lg:flex items-center space-x-2">
             {navItems.map((item) => (
               <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                 <Link
                   to={item.path}
-                  className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
+                  className={`px-5 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 font-medium ${
                     location.pathname === item.path
                       ? 'bg-eco-500 text-white shadow-lg'
                       : 'text-gray-700 hover:bg-white/50'
                   }`}
                 >
-                  <span className="text-lg">{item.icon}</span>
-                  <span className="font-medium">{item.name}</span>
+                  <span className="text-base">{item.icon}</span>
+                  <span>{item.name}</span>
                 </Link>
               </motion.div>
             ))}
           </div>

           {/* Mobile menu button */}
-          <div className="md:hidden">
+          <div className="lg:hidden">
             <button
               onClick={() => setIsOpen(!isOpen)}
-              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
+              className="p-3 rounded-lg hover:bg-white/20 transition-colors"
             >
               {isOpen ? (
-                <XMarkIcon className="h-6 w-6" />
+                <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
               ) : (
-                <Bars3Icon className="h-6 w-6" />
+                <Bars3Icon className="h-5 w-5 md:h-6 md:w-6" />
               )}
             </button>
           </div>
         </div>

         {/* Mobile Navigation */}
         <motion.div
           initial={false}
           animate={{ height: isOpen ? 'auto' : 0 }}
-          className="md:hidden overflow-hidden"
+          className="lg:hidden overflow-hidden"
         >
-          <div className="py-4 space-y-2">
+          <div className="py-4 space-y-1 border-t border-white/10 mt-2">
             {navItems.map((item) => (
               <Link
                 key={item.name}
                 to={item.path}
                 onClick={() => setIsOpen(false)}
-                className={`block px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
+                className={`block px-4 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 font-medium ${
                   location.pathname === item.path
                     ? 'bg-eco-500 text-white'
                     : 'text-gray-700 hover:bg-white/50'
                 }`}
               >
-                <span className="text-xl">{item.icon}</span>
-                <span className="font-medium">{item.name}</span>
+                <span className="text-lg">{item.icon}</span>
+                <span>{item.name}</span>
               </Link>
             ))}
           </div>
         </motion.div>
       </div>
     </motion.nav>
   );
 };

 export default Navbar;