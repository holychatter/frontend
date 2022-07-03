
import '../assets/resources/custom/style/main-6.css'
import sound_hurtubise_ogg from '../assets/resources/holychatter/sounds/hurtubise.ogg'
import sound_hurtubise_mp3 from '../assets/resources/holychatter/sounds/hurtubise.mp3'
import React from 'react'
import GetInnerHtmlStrLocalized from '../datas/GetInnerHtmlStrLocalized'
import PageContent from '../components/util/PageContent'
import H1TitleId from '../components/title/H1TitleId'
import LinkToModal from '../components/modal/LinkToModal'



function ChristianMessage({ language, setLanguage }) {

    return (
        <PageContent language={language} setLanguage={setLanguage}>
            <H1TitleId language={language} titleId="christianMessage" />
            <br /><br />
            <div className="hc-left-a-search">
                <audio controls>
                    <source src={sound_hurtubise_ogg} type="audio/ogg" />
                    <source src={sound_hurtubise_mp3} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <br /><br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg1" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Mt 11, 28">
                    <font color="#bf2329">28</font> « Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg2" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 15,11">
                    <font color="#bf2329">11</font> Je vous ai dit cela pour que ma joie soit en vous, et que votre joie soit parfaite.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Lc 6, 36-37">
                    <font color="#bf2329">36</font> Soyez miséricordieux comme votre Père est miséricordieux.<br /><br />
                    <font color="#bf2329">37</font> Ne jugez pas, et vous ne serez pas jugés ; ne condamnez pas, et vous ne serez pas condamnés. Pardonnez, et vous serez pardonnés.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 5, 22-27">
                    <font color="#bf2329">22</font> Car le Père ne juge personne : il a donné au Fils tout pouvoir pour juger,<br /><br />
                    <font color="#bf2329">23</font> afin que tous honorent le Fils comme ils honorent le Père. Celui qui ne rend pas honneur au Fils ne rend pas non plus honneur au Père, qui l’a envoyé.<br /><br />
                    <font color="#bf2329">24</font> Amen, amen, je vous le dis : qui écoute ma parole et croit en Celui qui m’a envoyé, obtient la vie éternelle et il échappe au jugement, car déjà il passe de la mort à la vie.<br /><br />
                    <font color="#bf2329">25</font> Amen, amen, je vous le dis : l’heure vient – et c’est maintenant – où les morts entendront la voix du Fils de Dieu, et ceux qui l’auront entendue vivront.<br /><br />
                    <font color="#bf2329">26</font> Comme le Père, en effet, a la vie en lui-même, ainsi a-t-il donné au Fils d’avoir, lui aussi, la vie en lui-même ;<br /><br />
                    <font color="#bf2329">27</font> et il lui a donné pouvoir d’exercer le jugement, parce qu’il est le Fils de l’homme.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 8, 15-16">
                    <font color="#bf2329">15</font> Vous, vous jugez de façon purement humaine. Moi, je ne juge personne.<br /><br />
                    <font color="#bf2329">16</font> Et, s’il m’arrive de juger, mon jugement est vrai parce que je ne suis pas seul : j’ai avec moi le Père, qui m’a envoyé.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg3" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 12, 47">
                    <font color="#bf2329">47</font> Si quelqu’un entend mes paroles et n’y reste pas fidèle, moi, je ne le juge pas, car je ne suis pas venu juger le monde, mais le sauver.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg4" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 9, 1-3">
                    <font color="#bf2329">01</font> En passant, Jésus vit un homme aveugle de naissance.<br /><br />
                    <font color="#bf2329">02</font> Ses disciples l’interrogèrent : « Rabbi, qui a péché, lui ou ses parents, pour qu’il soit né aveugle ? »<br /><br />
                    <font color="#bf2329">03</font> Jésus répondit : « Ni lui, ni ses parents n’ont péché. Mais c’était pour que les œuvres de Dieu se manifestent en lui.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg5" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="1Jn 4, 8-10">
                    <font color="#bf2329">08</font> Celui qui n’aime pas n’a pas connu Dieu, car Dieu est amour.<br /><br />
                    <font color="#bf2329">09</font> Voici comment l’amour de Dieu s’est manifesté parmi nous : Dieu a envoyé son Fils unique dans le monde pour que nous vivions par lui.<br /><br />
                    <font color="#bf2329">10</font> Voici en quoi consiste l’amour : ce n’est pas nous qui avons aimé Dieu, mais c’est lui qui nous a aimés, et il a envoyé son Fils en sacrifice de pardon pour nos péchés.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Rm 8, 37-39">
                    <font color="#bf2329">37</font> Mais, en tout cela nous sommes les grands vainqueurs grâce à celui qui nous a aimés.<br /><br />
                    <font color="#bf2329">38</font> J’en ai la certitude : ni la mort ni la vie, ni les anges ni les Principautés célestes, ni le présent ni l’avenir, ni les Puissances,<br /><br />
                    <font color="#bf2329">39</font> ni les hauteurs, ni les abîmes, ni aucune autre créature, rien ne pourra nous séparer de l’amour de Dieu qui est dans le Christ Jésus notre Seigneur.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 8, 1-11">
                    <font color="#bf2329">01</font> Quant à Jésus, il s’en alla au mont des Oliviers.<br /><br />
                    <font color="#bf2329">02</font> Dès l’aurore, il retourna au Temple. Comme tout le peuple venait à lui, il s’assit et se mit à enseigner.<br /><br />
                    <font color="#bf2329">03</font> Les scribes et les pharisiens lui amènent une femme qu’on avait surprise en situation d’adultère. Ils la mettent au milieu,<br /><br />
                    <font color="#bf2329">04</font> et disent à Jésus : « Maître, cette femme a été surprise en flagrant délit d’adultère.<br /><br />
                    <font color="#bf2329">05</font> Or, dans la Loi, Moïse nous a ordonné de lapider ces femmes-là. Et toi, que dis-tu ? »<br /><br />
                    <font color="#bf2329">06</font> Ils parlaient ainsi pour le mettre à l’épreuve, afin de pouvoir l’accuser. Mais Jésus s’était baissé et, du doigt, il écrivait sur la terre.<br /><br />
                    <font color="#bf2329">07</font> Comme on persistait à l’interroger, il se redressa et leur dit : « Celui d’entre vous qui est sans péché, qu’il soit le premier à lui jeter une pierre. »<br /><br />
                    <font color="#bf2329">08</font> Il se baissa de nouveau et il écrivait sur la terre.<br /><br />
                    <font color="#bf2329">09</font> Eux, après avoir entendu cela, s’en allaient un par un, en commençant par les plus âgés. Jésus resta seul avec la femme toujours là au milieu.<br /><br />
                    <font color="#bf2329">10</font> Il se redressa et lui demanda : « Femme, où sont-ils donc ? Personne ne t’a condamnée ? »<br /><br />
                    <font color="#bf2329">11</font> Elle répondit : « Personne, Seigneur. » Et Jésus lui dit : « Moi non plus, je ne te condamne pas. Va, et désormais ne pèche plus. »
                </LinkToModal>
                <br /><br />


                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg6" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="1Tm 1, 15">
                    <font color="#bf2329">15</font> Voici une parole digne de foi, et qui mérite d’être accueillie sans réserve : le Christ Jésus est venu dans le monde pour sauver les pécheurs ; et moi, je suis le premier des pécheurs.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Lc 19, 10">
                    <font color="#bf2329">10</font> En effet, le Fils de l’homme est venu chercher et sauver ce qui était perdu. »
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 13, 5">
                    <font color="#bf2329">05</font> puis il verse de l’eau dans un bassin. Alors il se mit à laver les pieds des disciples et à les essuyer avec le linge qu’il avait à la ceinture.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg7" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 3, 16">
                    <font color="#bf2329">16</font> Car Dieu a tellement aimé le monde qu’il a donné son Fils unique, afin que quiconque croit en lui ne se perde pas, mais obtienne la vie éternelle.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg8" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 13, 1">
                    <font color="#bf2329">01</font> Avant la fête de la Pâque, sachant que l’heure était venue pour lui de passer de ce monde à son Père, Jésus, ayant aimé les siens qui étaient dans le monde, les aima jusqu’au bout.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 15, 13">
                    <font color="#bf2329">13</font> Il n’y a pas de plus grand amour que de donner sa vie pour ceux qu’on aime.
                </LinkToModal>
                <br /><br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg9" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Rm 8, 26-27">
                    <font color="#bf2329">26</font> Bien plus, l’Esprit Saint vient au secours de notre faiblesse, car nous ne savons pas prier comme il faut. L’Esprit lui-même intercède pour nous par des gémissements inexprimables.<br /><br />
                    <font color="#bf2329">27</font> Et Dieu, qui scrute les cœurs, connaît les intentions de l’Esprit puisque c’est selon Dieu que l’Esprit intercède pour les fidèles.
                </LinkToModal>
                <br /><br />


                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg10" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Ep 3, 17-19">
                    <font color="#bf2329">17</font> Que le Christ habite en vos cœurs par la foi ; restez enracinés dans l'amour, établis dans l'amour.<br /><br />
                    <font color="#bf2329">18</font> Ainsi vous serez capables de comprendre avec tous les fidèles quelle est la largeur, la longueur, la hauteur, la profondeur…<br /><br />
                    <font color="#bf2329">19</font> Vous connaîtrez ce qui dépasse toute connaissance : l’amour du Christ. Alors vous serez comblés jusqu’à entrer dans toute la plénitude de Dieu.
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Mt 6, 9-13">
                    <font color="#bf2329">09</font> Vous donc, priez ainsi : Notre Père, qui es aux cieux, que ton nom soit sanctifié,<br /><br />
                    <font color="#bf2329">10</font> que ton règne vienne, que ta volonté soit faite sur la terre comme au ciel.<br /><br />
                    <font color="#bf2329">11</font> Donne-nous aujourd’hui notre pain de ce jour.<br /><br />
                    <font color="#bf2329">12</font> Remets-nous nos dettes, comme nous-mêmes nous remettons leurs dettes à nos débiteurs.<br /><br />
                    <font color="#bf2329">13</font> Et ne nous laisse pas entrer en tentation, mais délivre-nous du Mal.
                </LinkToModal>
                <br /><br />


                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg11" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Lc 23,39-43">
                    <font color="#bf2329">39</font> L’un des malfaiteurs suspendus en croix l’injuriait : « N’es-tu pas le Christ ? Sauve-toi toi-même, et nous aussi ! »<br /><br />
                    <font color="#bf2329">40</font> Mais l’autre lui fit de vifs reproches : « Tu ne crains donc pas Dieu ! Tu es pourtant un condamné, toi aussi !<br /><br />
                    <font color="#bf2329">41</font> Et puis, pour nous, c’est juste : après ce que nous avons fait, nous avons ce que nous méritons. Mais lui, il n’a rien fait de mal. »<br /><br />
                    <font color="#bf2329">42</font> Et il disait : « Jésus, souviens-toi de moi quand tu viendras dans ton Royaume. »<br /><br />
                    <font color="#bf2329">43</font> Jésus lui déclara : « Amen, je te le dis : aujourd’hui, avec moi, tu seras dans le Paradis. »
                </LinkToModal>&nbsp;&nbsp;&nbsp;
                <LinkToModal language={language} linkContent="Jn 21, 15-19">
                    <font color="#bf2329">15</font> Quand ils eurent mangé, Jésus dit à Simon-Pierre : « Simon, fils de Jean, m’aimes-tu vraiment, plus que ceux-ci ? » Il lui répond : « Oui, Seigneur ! Toi, tu le sais : je t’aime. » Jésus lui dit : « Sois le berger de mes agneaux. »<br /><br />
                    <font color="#bf2329">16</font> Il lui dit une deuxième fois : « Simon, fils de Jean, m’aimes-tu vraiment ? » Il lui répond : « Oui, Seigneur ! Toi, tu le sais : je t’aime. » Jésus lui dit : « Sois le pasteur de mes brebis. »<br /><br />
                    <font color="#bf2329">17</font> Il lui dit, pour la troisième fois : « Simon, fils de Jean, m’aimes-tu ? » Pierre fut peiné parce que, la troisième fois, Jésus lui demandait : « M’aimes-tu ? » Il lui répond : « Seigneur, toi, tu sais tout : tu sais bien que je t’aime. » Jésus lui dit : « Sois le berger de mes brebis.<br /><br />
                    <font color="#bf2329">18</font> Amen, amen, je te le dis : quand tu étais jeune, tu mettais ta ceinture toi-même pour aller là où tu voulais ; quand tu seras vieux, tu étendras les mains, et c’est un autre qui te mettra ta ceinture, pour t’emmener là où tu ne voudrais pas aller. »<br /><br />
                    <font color="#bf2329">19</font> Jésus disait cela pour signifier par quel genre de mort Pierre rendrait gloire à Dieu. Sur ces mots, il lui dit : « Suis-moi. »
                </LinkToModal>
                <br />

                <span className='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg12" /></span>
                <br /><br />

            </div>
        </PageContent>
    )
}

export default ChristianMessage
