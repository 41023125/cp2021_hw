var tipuesearch = {"pages": [{'title': '大約', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n \n 41023125 \n 網站倉儲 \n \xa0 \n 網站連結 \n \n \n \n hw1\xa0 \n \xa0 1. 將左右碰撞移動的紅色方塊改為先移動至水平畫面中心點後接著上下碰撞移動 \xa0 \n \xa0 2. 點擊擊啟動按鈕或中斷按鈕使紅色方塊上下游移碰撞移 \xa0 \n \xa0 3. 英文打字 \xa0 \n \xa0 4. 中文打字 \n hw2 \n hw3 \n 1. snake（手動） \n 2. 蛇', 'tags': '', 'url': '大約.html'}, {'title': 'Examples', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. (本動態頁面檔案  Examples.txt ) \n 1. 從 1 累加到 100 (以下列 button 呈現). \n 2. 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目, 請分別將程式製作為按鈕 (button). \n 3. 請利用  Canvas  繪製 Fig. 3.7 的流程圖 (Flow Chart). \n 4. 請利用 Canvas 繪製你所編寫"從 1 累加到 10"程式的流程圖 (Flow Chart). \n 5. 請各班各組合力完成 3.5 Exercises 中的 14 個題目. \n 6. 請各組從 4.3 Exercises 中選擇一個題目製作為頁面中的按鈕 (button). \n 無  Canvas  繪圖需求的程式, 可放在第一區, 而採  Canvas  繪圖的程式則可放入第二區. \n 將 Gist 中的程式導入本頁面的程式段:  brython_button_prog.txt , 只要配合 button id 對應即可導入編輯區. \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 開始 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 結束 \n \n  button 程式 1 ####################################### button 程式 1 開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束   button 程式 1 ####################################### button 程式 1 結束 \n \n  button 程式 2 ####################################### button 程式 2 開始 \n 第二編輯區程式 ( 編輯  Snake 原始碼): \n 查驗輸入字串 Snake \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n \n  button 程式 2 ####################################### button 程式 2  結束 \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n References: \n https://zerojudge.tw/ \n https://shaform.com/csdream/docs/problem-solving/ \n https://onlinejudge.org/ \n', 'tags': '', 'url': 'Examples.html'}, {'title': 'portable_hybrid', 'text': 'W8 配合電腦輔助設計室所建立的  portable_hybrid.7z  (任何人都可以下載 - 此即 academic portfolio 中的服務) 可攜程式環境系統. \n 註: portable_hybrid.7z 是儲存在 2021fall At mde 的 GDrive 中. \n portable_hybrid.7z  下載檔案約 350MB, 解開壓縮檔案後約為 1GB. \n 此一版本並未包含  https://www.fossil-scm.org , 當各組建立 Fossil SCM server 時必須自行在 Windows 與 Ubuntu 操作系統中下載當時最新的 Fossil SCM 版本. \n portable_hybrid 可攜程式系統介紹: \n 此版本是配合電腦輔助設計室 2021 年 Fall 更新電腦後所製作, 其中的 start_hybrid_ipv4.bat 與 start_hybrid_ipv6.bat可以使用電腦 C 槽 SSD 中的 C:\\2021_cadlab_portable\\data\\Python395 與 C:\\2021_cadlab_portable\\data\\portablegit_2.31.1, 取得較快的執行速度. \n 但也同時在 portable_hybrid\\data 目錄中自帶這兩個目錄檔案, 因此也可以透過 start_ipv4.bat 與 start_ipv6.bat 使用隨身碟中的 Python 與 Git. \n 支援程式語言: Python 3.9.5 與 ANSI C ( Tiny C Compiler ). \n 提供 GitExtensions, Sharex, kdiff3, Zoomit, ProcessExplorer, ProcessMonitor, Wink, Solvespae 等工具. \n', 'tags': '', 'url': 'portable_hybrid.html'}, {'title': 'run', 'text': '這個頁面利用  Brython  程式庫, 讓使用者可以直接在瀏覽器中執行 Python 語法程式 (與 CPython  語法比較 ). Brython 程式庫以 Javascript 編寫, 能在頁面 置入 html,  並 結合 第三方 Javascript 程式庫, 進行  2D  與  3D  繪圖應用. (範例:  https://imvickykumar999.github.io/Chrome-Extension/Brython%20Snake/snake.html  ) \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'runsrc', 'text': 'run 頁面在動態網頁的 html: \n run.txt \n \n', 'tags': '', 'url': 'runsrc.html'}, {'title': 'Snake', 'text': '\n Score: 0 \n \n High Score: 0 \n \n Instructions \n \n', 'tags': '', 'url': 'Snake.html'}, {'title': 'SSH', 'text': 'putty \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Network', 'text': '當電腦輔助設計室中, 將連外網路由 NAT 轉為直接連到 Backbone 後, 可能因為電腦中所安裝的套件問題, 會因直接網路連外, 導致外部電腦試圖透過 ARP 快取進行破壞攻擊, 因此必須設法中止此一攻擊, 並且能利用 IPv6 網路協定上網. \n \n 面對此一網路威脅的處理方法, 就是在純 IPv6 網路協定下, 讓電腦中所安裝的潛在問題套件無法透過系統的 Proxy 設定連網: \n \n 關閉 Windows 操作系統的網路代理主機設定 \n 關閉 IPv4 網路協定 \n 設定 IPv6 的 DNS 伺服器, 2001:b000:168::1 \n 針對瀏覽器與 git 客戶端, 分別設定能從純 IPv6 轉往只支援 IPv4 網路協定的代理主機. \n \n git 的網路代理主機設定 git config --global http.proxy  http://[Proxy_ip_address]:3128 \n Computer Networks: \n 相關開放電子書:  http://intronetworks.cs.luc.edu/current1/html/ \n 其他格式:  https://open.umn.edu/opentextbooks/textbooks/an-introduction-to-computer-networks \n', 'tags': '', 'url': 'Network.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n 何謂 Secure Shell? \n HTTPS:  https://en.wikipedia.org/wiki/HTTPS \n Transport Layer Security:  https://en.wikipedia.org/wiki/Transport_Layer_Security \n SSH:  https://en.wikipedia.org/wiki/Secure_Shell \n 如何利用 SSH 協定將倉儲改版內容推送到 Github: \n SSH 了沒 \n 以下為 Github 所提供有關 Token 與 SSH 的說明資料: \n Github Personal Token:  https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ \n Github SSH:  https://docs.github.com/en/authentication/connecting-to-github-with-ssh \n Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit. \n GnuPG  (GNU Privacy Guard): \n 如何利用  https://www.gpg4win.org/  保全數位檔案傳送. \n https://gnupg.org/gph/en/manual.pdf \n https://gnupg.org/documentation/manuals/gnupg.pdf \n https://www.gpg4win.org/doc/en/gpg4win-compendium.html \n 由於數位檔案很容易被改造, 因此在製作數位檔案內容時, 在 Windows 平台上可以利用 Gpg4win 加密或保全. \n GnuPG 加密 \n GnuPG 保全 - 在網站提供檔案下載前, 利用 Gpg4win 對檔案進行數位簽章 \n 在執行作業之前, 必須要仔細閱讀作業要求內容, 想像一下作業指定者為何要提出此一作業, 其目的為何, 然後再根據要求逐一安排時間完成. \n 作業一的主題為網際動畫與 touch typing, 並要求學員要至 Github 申請帳號, 並將作業內容直接在課程網頁中執行 Brython (Browser Python), 完成後將程式碼放到各學員 Github 帳號下的 Gist 區域, 然後再將作業連結提交至課程網頁倉儲的 Discussion 區. \n 另外, 除了要修改 Task1 頁面中動畫的程式外, 還要求使用者從 Cango 頁面, 將程式中的網際按鈕放到頁面, 以便控制程式的執行或中斷. \n 假如直翻 Browser Python 就是瀏覽器上的 Python, 除了能夠在瀏覽器上執行的 Python, 還有沒有其他環境上能夠執行的 Python？ \n 例如: 1994 年剛被開發出來的 Python 是用 C 寫的, 所以稱為 CPython, 可以在各種操作系統平台上執行, 而且累積二十幾年的發展, 已經擁有許多的程式庫, 讓 CPython 可以解決許多工程問題. \n 除了 CPython 與 Brython (以 Javascript 編寫) 之外, 還有以 Java 編寫的  Jython , 以 .NET 技術編寫的  ironPython , 還有以 Rust 編寫的  RustPython  或是以 Python 編寫的  PyPy , 每一種 Python 都有其特色, 在適合的環境中可用來解決各種不同的問題. \n \n 當我們看到  https://mde.tw/cp2021/content/Task1.html  這個頁面中的程式執行時, 應該會好奇, 為何能夠直接在瀏覽器的網頁上, 直接點擊 Run, Python 程式就能執行, 在頁面中畫靜態與動態的圖型. \n 這種在網頁上畫圖的依據是採用 HTML5 規格中的  Canvas API . 原本是設計給 Javascript 在網頁上繪圖, 透過 Canvas API 程式語法, 就可以透過 Brython 在頁面中繪圖. \n \n HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.10.20 22:00 關閉 \n \n 請至  https://github.com  申請 Github 帳號後, 至  https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists  中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n HW1-2 : 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 程式碼說明: \n HW1-1.py \n Brython browser 模組 \n Brython browser html 模組 \n Brython enable/disable event \n Python 函式定義與呼叫 \n Python 縮排 (indentation) \n 字串 (string) \n 數列 (list) \n if 判斷式 \n 在 Python 關鍵字中, None, True 與 False 第一個字母都必須是大寫 \n 在 python.org 網站範圍搜尋 global 關鍵字 \n 有關 Python 的 global:  https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python \n # 從 browser 導入 html\nfrom browser import html\n# 從 browser 導入 document 並且對應為 doc\nfrom browser import document as doc\n# 導入 browser.timer\nimport browser.timer\n\n# 定義一個 game() 函式\ndef game():\n    """\n利用 global 關鍵字 將 px, py 與 speed \n設為可在函式內改變對應內容 \n(意即, 這三個定義在函式外的全域變數,  \n在函式中分別位於等號左邊)\n    """\n    global px, py, speed\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    if px < canvas.width/2:\n        px += speed\n    else:\n        py -= speed\n    \n    if px < 0 or (px + width) > canvas.width:\n        speed = -speed\n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    \n    ctx.fillRect(px, py, width, height)\n\n"""\na variable declared outside of the function or \nin global scope is known as a global variable. \nThis means that a global variable can be accessed \ninside or outside of the function.\n"""\n\ncanvas = html.CANVAS(width = 600, height = 600)\ncanvas.id = "game-board"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeed = 2\n\nbrowser.timer.set_interval(game, 10) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW1-1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW1-2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n', 'tags': '', 'url': 'HW1-2.html'}, {'title': 'Token', 'text': '當你建立 Github 帳號後就可以利用 Gist 儲存資料或程式碼, 且可以利用  https://mde.tw/cp2021/content/run.html  來執行 Brython 程式. \n 在 run.html 執行 Brython 程式, 可以使用下列三種方法: \n \n 直接連線至  https://mde.tw/cp2021/content/run.html  將 Brython 程式寫在編輯區, 然後按下 Run. \n 將 Brython 程式存在 Gist, 利用 run.html?src=Gist_URL, run.html 中的 Javascript 就會導入此 Gist 程式執行. \n 將 Brython 程式寫在 run.html 頁面中, 然後安排其中的 Javascript 或 Brython 程式導入執行. \n \n 而上述三種程式的執行若更動 run.html 或取 run.html?src=Gist_URL 連結放入頁面, 都必須要在各自的 cp2021_hw倉儲的動態網站中改版, 轉為靜態網頁內容, 然後新增提交並推送至 Github, 建立個人 Github 帳號對應的Personal Token, 就可以放入近端倉儲 .git/config 中的 origin url 帳號密碼區, 然後將改版資料推送到 Github. \n 利用 Personal Token 字串 push 改版資料的步驟: \n \n 至 Github 帳號 settings 下的開發者區域建立能夠更動 repo 的權限, 並且決定此 Token 權限的使用期限. \n 將此 Token 字串放入對應倉儲 .git/config 檔案中的 origin url=https://Token_String@github.com/帳號/cp2021_hw.git \n \n', 'tags': '', 'url': 'Token.html'}, {'title': 'SSH push', 'text': 'Github 帳號用戶除了可以利用 Personal Token push 改版資料外, 也可以利用 SSH keys 將改版資料 push 到 Github. 詳細說明可以參考  SSH 了沒 . \n 以下說明 SSH push 操作步驟: \n \n 下載 putty 安裝套件, 安裝後, 將 putty 目錄取出放入隨身碟 y:\\ 目錄中 (也就是 data 目錄中). \n 修改 start_ipv4.bat 或 start_ipv6.bat, 設定 GIT_SSH 變數, 指向 putty 套件目錄中的 plink.exe, 表示隨後的 git push 將透過 putty 中的 session 設定連網. 亦即在 start_ipv4.bat 或 start_ipv6.bat 檔案中加入  set GIT_SSH=%Disk%:\\putty\\plink.exe \n 利用 putty 中的 puttygen.exe 建立 keys, 按下 generate 後, 在 puttygen 執行視窗上方以滑鼠隨意移動, 以便利用滑位置隨機建立 keys, 完成後在原先滑鼠移動位置所出現的 key, 即為 OpenSSH 格式的 public key 內容, 而此一內容就是要放到 Github 帳號 settings 中的 SSH and GPG keys 中的 new SSH key 欄位區 (此為用戶所設定的 public key). \n 接下來要利用 puttygen 建立 keys 視窗右下的 save private key, 將此一 .ppk private key 存到 home_ipv4 或 \n \xa0home_ipv6 目錄下. \n 接下來要啟動 putty.exe 建立一個能夠連線至 github.com 網站的 session, 此 session 可以取名為 github.com, 也可以取其它名稱, 只是這個 session 名稱, 將會成為 git 指令與 plink.exe 連結使用後的連線 session 名稱. 而在設定此連線到 github.com 的 session, 在無需設定 proxy 的情況下, 只需要指定 SSH - AUTH 中的 private key 存放位置. \n 最後則是配合採用 SSH 協定連線, 必須要修改倉儲中 .git/config url 的連線協定, 從原先的  https://github.com/帳號/cp2021_hw.git  改為  git@github.com:帳號/cp2021_hw.git  也就是採用 git 作為連線到 putty session 名稱 github.com, 然後採用 github 帳號檢查是否此 private key 與前述放入 Github SSH and GPG keys 的 public 成對, 若匹配成功, 則使用者利用上述的 SSH 就可以執行將改版內容 push 到 Github. \n \n 上述採 SSH 流程 push 改版資料的基本概念為: \n \n 啟動隨身系統時就告知 GIT_SSH 變數, 要利用 putty 工具作為 SSH 連線的 client 端. \n 接著要建立 OpenSSH 格式的 public key, 在 Github 帳號下完成登記. \n 至於近端則要儲存與送到 Github public 對應的 putty 格式 private key, 因為設定 putty session 時會用到此 private key. \n 接著就是利用這把近端的 private key, 建立一個能夠採 SSH 協定連線到 Github 的 putty session, 此 session 其實只有三個基本屬性: 連線主機符號名稱, 也就是 github.com, 連線 session 名稱, 以及與 session 對應的 private key 位置. \n 最後就是修改要採 SSH push 的倉儲中 .git/config url 連線協定, 從 https 改為 SSH, 並以 git 作為登入帳號, 且宣告所要使用的 putty session 名稱與登入後要驗證 key 權限的 session 名稱. \n \n', 'tags': '', 'url': 'SSH push.html'}, {'title': 'GitExtensions', 'text': 'https://gitextensions.github.io/ \n 從  https://github.com/gitextensions/gitextensions/releases/tag/v3.5.4  下載可攜版本, 放入隨身碟就可以執行. \n 以下將要建立一個 GitExtensions 的應用導覽 Wink. \n', 'tags': '', 'url': 'GitExtensions.html'}, {'title': 'HW2', 'text': '在電腦輔助設計的新電腦上可以利用 USB 隨身碟設定所謂 Hybrid 可攜程式系統, 也就是 Python 與 Portablegit 使用 c:\\2021_portable_kmol\\data 目錄中的檔案, 而將 start_ipv4.bat, start_ipv6.bat, data, wscite, tmp 等目錄放在 USB 隨身碟. \n 在電腦輔助設計室中, 以 USB 隨身碟啟動的 start_ipv4.bat 檔案內容:  start_ipv4_hybrid.txt \n 在動態系統中加入 run 頁面的 html 原始碼:  run.txt \n 當你建立 Github 帳號後就可以利用 Gist 儲存資料或程式碼, 且可以利用  https://mde.tw/cp2021/content/run.html  來執行 Brython 程式. \n 在  run.html  執行 Brython 程式, 可以使用下列三種方法: \n \n 直接連線至  https://mde.tw/cp2021/content/run.html  將 Brython 程式寫在編輯區, 然後按下 Run. \n 將 Brython 程式存在 Gist, 利用 run.html?src=Gist_URL,  run.html  中的 Javascript 就會導入此 Gist 程式執行. \n 將 Brython 程式寫在  run.html  頁面 html 超文件中, 然後安排其中的 Javascript 或 Brython 程式導入執行. \n \n 建立可攜程式系統時必須了解 start_ipv4.bat 或 start_ipv6.bat 中的所有指令用法: \n 以電腦輔助設計室中使用新電腦的 USB 可攜 Hybrid 設定 start_ipv4.bat 為例. \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\nset Local=C:\\2021_cadlab_portable\\data\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n\nset PYTHONHOME=%Local%\\Python395\n\nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n\npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n\nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n\nREM REGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n\nExit \n 因為電腦 C:\\ 中存放的可攜系統位於 C:\\2021_cadlab_portable\\data, 因此將此路徑設為 Local 變數, 然後與 Python 即 Portablegit 有關的路徑都使用 %Local% 變數設定. \n 有關 SSH push 設定必須將 putty 系統登錄檔案匯出後, 在啟動隨身系統時載入所需設定.  putty 設定登錄檔案匯出與匯入說明影片 . \n Windows 指令: \n echo off , 而放在前面的  @ 指令說明 . \n set : 設定 環境變數 . \n HomePath, HomeDrive, Home, USERPROFILE 都屬於 Windows 操作系統的 環境變數 . \n HW1-1 : 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n HW1-2 : 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n \n HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'Python', 'text': 'https://www.freecodecamp.org/news/want-to-learn-python-heres-our-free-4-hour-interactive-course/ \n https://introcs.cs.princeton.edu/python/home/ \n', 'tags': '', 'url': 'Python.html'}, {'title': 'run1', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. 本網頁 html 的  run1.txt . \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run1.html'}, {'title': 'run2', 'text': '第二種執行 Brython 程式的方法, 是將 Brython 程式存在 Gist, 利用 run.html?src=Gist_URL,  run.html  中的 Javascript 就會導入此 Gist 程式並自動執行. \n 按下導入 cango_gear1.py 且自動執行 \n 上述連結為: \n https://mde.tw/cp2021_hw/content/run.html?src=https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py \n run.html 後的變數為 ?src= https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py \n 其中的  e896a4705a95ac8cc4147b355b0e87ef  為 gist 檔案群組編號, 而隨後的  8954b8280c524c5781dc3c0b3565bc489d3aa3a3  則為 cango_gear1.py 的版次編號. \n 本網頁的 html  run2.txt . \n', 'tags': '', 'url': 'run2.html'}, {'title': 'run3', 'text': '第三種在網頁中執行 Brython 的方法, 是直接將程式寫在 html 網頁中執行. 本頁面的 html 程式碼為  run3.txt . \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run3.html'}, {'title': 'Server', 'text': '在電腦輔助設計室中的 11 台舊電腦, 因為第三磁區並沒有保護, 因此可以設定為 Flask 與 Fossil SCM server 主機. \n 六台新電腦中的一台可以透過  remote desktop  連線至各分組的伺服器進行設定. \n 至於在 Windows 10 中可以利用  https://nssm.cc/  將應用程式設為 service. \n Windows 10 中的動態課程網頁系統: \n 以 waitress 執行 cmsimde/wsgi.py: \n python -m pip install waitress \n 建立一個 waitress_server.py: \n # 執行前, 必須要先利用 python -m pip install waitress 安裝 wairess 模組\n# 接著從 waitress 導入 serve\nfrom waitress import serve\n \n# 導入 flaskapp\n"""\n在不將 cmsimde 目錄納入 sys.path 搜尋路徑時, \n可以複製一份 cmsimde/nocache.py 至倉儲目錄. \n或者將 cmsimde 納入系統搜尋路徑中, \n且必須放在導入 flaskapp  之前\n"""\nimport sys\nsys.path.append("./cmsimde")\nfrom cmsimde import flaskapp\n \n# run flaskapp.app with production waitress\nserve(flaskapp.app, host=\'0.0.0.0\', port=5000, url_scheme=\'https\') \n 接著先除去 url_scheme=\'https\' 後以 python waitress_server.py 執行. cmsimde 主機將可透過瀏覽器連結  http://server_ip:5000 \n 接下來則可以利用  Stunnel  作為 https 代理主機, 作為  http://server_ip:5000  與外部瀏覽器連接的代理轉接者. \n stunnel.conf 設定內容: \n [https]\naccept = 8443\nconnect = 5000\ncert = fullchain.pem\nkey = privkey.pem\nTIMEOUTclose = 0 \n cmsimde 系統的靜態網頁則可以利用  Nginx  伺服. \n Nginx 在 Ubuntu /etc/nginx/sites-available/default 中的設定: \n server {\n    listen 80;\n    listen [::]:80;\n    root /home/wcm2021/newcms;\n    index index.html;\n   \n    location /static {\n        alias /home/wcm2021/newcms/cmsimde/static/;\n    }\n   \n    location /downloads {\n        alias /home/wcm2021/newcms/downloads/;\n    }\n   \n    location /images {\n        alias /home/wcm2021/newcms/images/;\n    }\n   \n    location / {\n            try_files $uri $uri/ =404;\n    } \n       \n    location /blog {\n        alias /home/wcm2021/cmsimfly/blog/;\n    }\n   \n    location /reveal {\n        alias /home/wcm2021/cmsimfly/reveal/;\n    }\n}\n   \nserver {\n    listen 443 ssl;\n    #listen [::]:443 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/cmsimfly/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8080;\n    }\n    \n    #server_name ipv4_ip; \n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n}\n    \nserver {\n    #listen 89 default_server;\n    #listen [::]:89 default_server ipv6only=on;\n    \n    listen 8943 ssl;\n    #listen [::]:8943 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/cmsimfly2/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8082;\n    }\n    \n    #server_name ipv4_ip;\n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n}\n   \nserver {\n    #listen 88 default_server;\n    #listen [::]:88 default_server ipv6only=on;\n    \n    listen 8843 ssl;\n    #listen [::]:8843 ssl ipv6only=on;\n    \n    location /static {\n        alias /home/wcm2021/newcms/cmsimde/static/;\n    }\n    \n    location / {\n        include uwsgi_params;\n        uwsgi_pass  127.0.0.1:8081;\n    }\n    \n    #server_name ipv4_ip;\n    #ssl on;\n    ssl_certificate /etc/stunnel/localhost.crt;\n    ssl_certificate_key /etc/stunnel/localhost.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";\n    ssl_prefer_server_ciphers on;\n    try_files $uri $uri/ =404;\n} \n \n', 'tags': '', 'url': 'Server.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n 文獻探討:  https://towardsdatascience.com/training-a-snake-game-ai-a-literature-review-1cdddcd1862f \n 以 Python 實作演算法 \n ai_snake_in_python.pdf \xa0( https://hawstein.com/2013/04/15/snake-ai/ ,  https://github.com/mdecourse/snake-ai ) \n https://github.com/mdecourse/python-game-snake \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/   \n https://craighaber.github.io/AI-for-Snake-Game/website_files/index.html   \n https://www.python-course.eu/snake_in_python.php   \n https://techitsmart.ca/2020/05/18/teaching-ai-to-play-snake-using-python/ \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'manual_snake', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n 補充: 鍵 盤 鍵 碼 值 對 照 表', 'tags': '', 'url': 'manual_snake.html'}, {'title': 'snake', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': 'snake.html'}, {'title': 'Algorithms', 'text': '演算法 -  https://web.ntnu.edu.tw/~algo/Algorithm.html \n Data Structure in Python.pdf \n Data Structure and Algorithm in Cpp.pdf \n Algorithm.pdf \n https://introcs.cs.princeton.edu/python/40algorithms/ \n VisualGo  (Visualization of Algorithm) \n Principles of Algorithmic Problem Solving.pdf \n Foundation of Computer Science:  http://infolab.stanford.edu/~ullman/focs.html \n Open Data Structures.pdf \n Free Programming books:  https://ebookfoundation.github.io/free-programming-books/ \n Python 的資料結構與演算法  ( 線上課程 ) \n https://www.louisbourque.ca/AI-Snake-Game/ \n https://hawstein.com/2013/04/15/snake-ai/ \n https://en.wikipedia.org/wiki/Depth-first_search \n https://favtutor.com/blogs/depth-first-search-python \n https://github.com/mdecourse/snake_pathfinding_ai \n https://super9.space/archives/1562 \n https://reposhub.com/python/game-development/memoiry-Snaky.html \n https://github.com/mdecourse/python-game-snake \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://craighaber.github.io/AI-for-Snake-Game/website_files/index.html \n https://www.python-course.eu/snake_in_python.php \n https://techitsmart.ca/2020/05/18/teaching-ai-to-play-snake-using-python/ \n https://www.geeksforgeeks.org/snake-ladder-problem-2/   \n 資料結構: \n https://www.aupress.ca/books/120226-open-data-structures/ \n', 'tags': '', 'url': 'Algorithms.html'}, {'title': 'ML in Brython', 'text': 'https://www.analyticsvidhya.com/blog/2021/07/python-on-frontend-ml-models-web-interface-with-brython/ \n https://github.com/mdecourse/Brython-ML \xa0 \n', 'tags': '', 'url': 'ML in Brython.html'}, {'title': 'Math', 'text': 'https://open.umn.edu/opentextbooks/textbooks/precalculus-an-investigation-of-functions \n', 'tags': '', 'url': 'Math.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks', 'tags': '', 'url': 'Final Project.html'}]};