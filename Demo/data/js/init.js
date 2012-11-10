
browserDetect.init();
var loading_Stage_Check = "Not Loaded";

$(document).ready(function(e)
{
	var all = $.event.props, len = all.length, res = [];
	while (len--) 
	{
		var el = all[len];
		if (el != 'layerX' && el != 'layerY') res.push(el);
	}
	$.event.props = res;	
	document.onselectstart = function () { return false; };  // fix the chrome cursor problem.
});

// Invalid browser
if(browserDetect.browser == 'Explorer' || browserDetect.browser == 'Opera')
{
	$(document).ready(function(e)
	{	
		$("body").empty().append($("#tmplInvalid").tmpl());
		return;
	});
} 

// print mode
else if (window.g_print == true && window.g_preview != undefined)
{
	$(document).ready(function(e)
	{	
		preview.load(g_preview); // just show all pages at once - a few style changes to below!
        setTimeout(window.print, 1000);
		return false;	
	});
}

// Preview mode. 
else if(window.g_preview != undefined)
{	
	$(document).ready(function loadingPreviewMode(e)
	{	
		//widget.useCanvas = ((browserDetect.browser == 'Safari')  || (navigator.userAgent.match(/Android/i) == "Android")) ?  true : false;
		widget.useCanvas = true; // always needed here - issues on device.
		
		if(browserDetect.OS == 'iPhone/iPod' && !window.navigator.standalone)
		{
			$("#tmplInstall").
				tmpl({safari: window.navigator.userAgent.indexOf('Safari') > 0}).
				appendTo("body"). // iOS install prompt
				find('#forceDevicePreview').
				click(function() { 
					preview.load(g_preview);
					$('#install').hide();
					return false;
				});
			
			var d = new Date();
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			var min = d.getMinutes();
			document.title = d.getDate() + " " + months[d.getMonth()] + " " + d.getHours() + ":" + (min < 10 ? "0" : "") + min;
		}
		else // check for android / on device.
		{
			//widget.useCanvas = ((browserDetect.browser == 'Safari')  || (navigator.userAgent.match(/Android/i) == "Android"));
			preview.load(g_preview);
		}

		$(window).bind('orientationchange', function() {
			$('body').scrollTop(0).scrollLeft(0);
			loading_Stage_Check = "preview Loaded";
		});
	});
}
else
{	
	// break free from iFrame
	if (window !== window.top)
	{
		window.parent.location = window.location.href;
	}

	function editorInit(e) // once js is downloaded. 
	{	
		var pid = 'last';

		//console.log("Instance ID at load", instanceId, "[" + window.name + "]");
        widget.useCanvas = ((browserDetect.browser == 'Safari')  || (navigator.userAgent.match(/Android/i))) ?  true : false;;

		if(account.isBrandNewUser() == true)
		{
			account.setup(); // sets up the accounts localvar
			account.createUser(); // creates a "new" user - free account.
			pid = project.add(e, "New Project"); // e not used, but necessary.
		}

        if ((g_pid != "") && (g_imgFullCanvas == "true"))
        {
            pid = g_pid;
        }

		account.checkIntegrity(); // check for accName, accType, maxProjects, maxPages
		var accId = account.get("id");
		var accObj = storage.get(accId);

		var loading = "NewUser";

		if(accObj.accType == "New" || accObj.accType == null)
		{
			account.drawSignup();
		}
		else
		{
			account.draw(accObj);
			fluidMenu.allowNewProjects();
            loading = "LoggedInUser";
		}

		function windowLoad() // after everything is downloaded.
		{
            notification.init();
			upload.init(); // allow the user to do desktop upload Safari only?
            userActionsInit2();	//load actions that need to happen before project.open happens - page frame hack fix.
            project.load(); // loads all the projects into the projects menu
            //if (!account.validateState())
           // {
                project.open(pid); // opens the last project they had open.	Sets zoom.
            //}
			userActionsInit(); 	// initialise the ui. must come after project is opened TODO: - bad idea - should be independent (and be before - wont impact css/cpu)
			lib.init(); // maybe wait till after first zoom even - if we can make it fast enough!?
			fluidMenu.init();
			screensize.width = $(window).width();
			screensize.height = $(window).height();
            tracker.record("loadEditor" + loading, 1);
			loading_Stage_Check = "Editor Loaded";
			
			//console.log("Loading account - checking for latest version.");
			account.validateState(); // everything is loaded, but make sure its correct.
			showPostLoadMessage();	
			
			$("#tmplGradientColorPickerBox").tmpl().appendTo("body");
			
			
		}

        function windowLoadPreview()    //Only loads project for preview Full canvas
        {
            fullCanvas.init(pid);
        }

        if (g_imgFullCanvas == "true")
        {
            $(window).load(windowLoadPreview);
        }
        else
        {
            $(window).load(windowLoad);
        }
	}

	
	if(localStorage)
	{
		var restoreId = localStorage.getItem("refreshing");
		if(restoreId)
		{
			localStorage.removeItem("refreshing"); // dont do anything if they are just refreshing. 
			g_instanceId = parseInt(restoreId);
			//console.log("Reusing old instance ID after refresh: ", g_instanceId)
		}
		else
		{
			g_instanceId = parseInt(Math.random()*100000000); // for making sure all tabs are up to date. 
			localStorage.setItem("instanceId", g_instanceId);
		}
		localStorage.setItem("instanceId", g_instanceId); // dont do anything if they are just refreshing. 
		
		// clean up a removed feature.
		localStorage.removeItem("storageCleared"); // dont do anything if they are just refreshing. 
	}	
	
	$(document).ready(editorInit);


	/*
	window.addEventListener('storage', function(event) {
		// TODO: this is a prototype. will go to a separate file if proves working and useful.
		
		if (event.key.substr(0,2) == 'p_' && project.get('id') == event.key)
		{
			//notification.add('alert', 'Project modified blah blah blah');
			//project.reopen();
		}
		
	}, false);
	*/
}











