<div class="outilContenuLarge">
	<div class="reseauxSociaux">
				<span class="reseauSocialTwitter jqTwitter" data-title="{stripcslashes(str_replace('"', '&#34;',$titre))|decoupe:140}"></span>
				<span class="reseauSocialFacebook jqFacebook"></span>
				<span class="reseauSocialViadeo jqViadeo"></span>
				<span class="reseauSocialLinkedin jqLinkedin" data-title="{stripcslashes(str_replace('"', '&#34;',$titre))|decoupe:200}" data-source="{Dispatch::getSiteName()}" data-summary="{stripcslashes(str_replace('"', '&#34;',$description))|decoupe:200}"></span>
				<span class="reseauSocialImprimer jqPrint"></span>
				<span class="reseauSocialEmail jqEmail"></span>
	</div>
</div>

<div id="envoieArticleReaction" class="{if !$posted}in{/if}visible">
       <div class="popRecommanderContent">
           <div class="close"><a href="#" onclick="document.getElementById('envoieArticleReaction').className='invisible';return false;">x</a></div>
           <div class="recommanderTexte">
           {if $envoyer_visible}
           	<script type="text/javascript">closeTimer();</script>
               <p class="marPadZero">{$msg_envoi_ami}</p>
			{/if}
		{nocache} 
			<form action="#envoieArticleReaction" name="envoyer_page" id="envoyer_page" method="post" onsubmit="return validate('envoyer_page', {if $subscriber == NULL || $subscriber == ''}1{else}0{/if})" >
	            <p>Email de votre ami :<br />
	            <input type="text" name="mail_destinataire" id="mail_destinataire" value="{$mail_destinataire}" class="popInputTextRecommander" /></p>
	            {if $subscriber == NULL || $subscriber == ""}
                       <p>Votre Nom :<br />
                       <input type="text" name="monNom" id="monNom" value="{$monNom}" class="popInputTextRecommander" /></p>
                       <p>Votre Email :<br />
                       <input type="text" name="monEmail" id="monEmail" value="{$monEmail}" class="popInputTextRecommander" /></p>
                       <p><span id="envoyer_page_message" {if $captcha_valid eq 0}style='display:none;'{/if}>Saisissez le code de s&eacute;curit&eacute; *</span>
                      	<span id="envoyer_page_error" class="formSpanLabel" style="{if $captcha_valid neq 0}display:none;{/if}color:red;font-weight:bold;">Code erron&eacute; *</span>
                       <img src="{Dispatch::get90_01()}" alt="" id="captcha" class="rsImgCapcha" />
                       <br />
                       <input type="text" size="5" name="captcha_o" id="captcha_o" class="popInputTextRecommander" style="width:88px;" />
                       </p>
				{else}
                       <input type="hidden" name="monEmail" id="monEmail" value="{$subscriber->getEmail()}" />
                       <input type="hidden" name="monNom" id="monNom" value="{$subscriber->getPrenom()} {$subscriber->getNom()}" />
				{/if}
                       <input type="hidden" name="confirm" id="confirm" value="" />
                       <p class="valider"><button class="bt2" type="submit" name="go">Valider</button></p>
            </form>
          {/nocache} 
           </div>
       </div>
   </div>
