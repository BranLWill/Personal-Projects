<%@ Page Title="Launch Schedules" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="LaunchSchedules.aspx.cs" Inherits="SpaceLaunch.MainDisplay" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="jumbotron" style="background-color: #808080" >
        <h1 style="color: #000000" >Space<span style="color: Highlight" >Launch</span></h1>
        <p class="lead" style="color: #000000" >Here are the top five Rocket Launches that are coming up.</p>
        <asp:Timer id="Timer1" runat="server" Interval="1000" OnTick="Timer1_Tick"></asp:Timer>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <div class="jumbotron">
                    <div style="align-items:center" >
                        <img id="rocketImg1" alt="/Images/placeholder_1920.png" src="https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png" width="925" height="600" runat="server"/>
                    </div>
                    <div style="align-items:center;padding-bottom:50px" >
                        <h3 ID="rocketName1" class="ng-binding" runat="server">Soyuz 2.1a/Fregat | Meridian-M №18</h3>
                        <p class="tzero" >
                            <span ID="rocketTimer1" class="ng-scope ng-isolate-scope" runat="server">1d 9h 36m 54s</span>
                        </p>
                        <div class="text-muted" >
                            <p>
                                <span ID="rocketStart1" class="ng-binding ng-scope" runat="server">T-0: July 30, 2019 05:00:00 UTC</span>
                            </p>
                            <p ID="rocketLocation1" class="ng-binding" runat="server">
                                43/3 (43L), Plesetsk Cosmodrome, Russia <a target="_blank" class="ng-scope" href="https://www.google.com/maps/?q=62.927300000000000,40.450000000000000"><i class="fa fa-map-marker"></i></a>
                            </p>
                        </div>
                        <p ID="rocketMission1" class="ng-binding ng-scope" style="padding-bottom:70px" runat="server">
                            The Meridian series of communications satellites is reported to be the replacement for all the Molniya-1T, 
                            the Molniya-3 and Molniya-3K satellite series and possibly also for the communication component of the Parus. 
                            They are launched into highly eccentric Molniya-orbits. Meridian is the highly eccentric orbit (HEO) component of 
                            the Integrated Satellite Communications System (ISSS), where they work in conjunction with the geostationary Raduga-1M 
                            (Globus-M) satellites. The bus structure is reportedly pressurized, possibly based on the Uragan-M bus. 
                            Meridian satellites carry three transponders operating in different frequency bands.
                        </p>
                        <p class="ng-scope" >
                            <a class="ng-binding" ></a>
                        </p>
                    </div>
                </div>
                <div class="jumbotron" runat="server">
                    <div style="align-items:center" runat="server">
                        <img ID="rocketImg2" alt="/Images/placeholder_1920.png" src="https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png" width="925" height="600" runat="server"/>
                    </div>
                    <div style="align-items:center;padding-bottom:50px" runat="server">
                        <h3 ID="rocketName2" class="ng-binding" runat="server">Soyuz 2.1a/Fregat | Meridian-M №18</h3>
                        <p class="tzero" runat="server">
                            <span ID="rocketTimer2" class="ng-scope ng-isolate-scope" runat="server">1d 9h 36m 54s</span>
                        </p>
                        <div class="text-muted" runat="server">
                            <p runat="server">
                                <span ID="rocketStart2" class="ng-binding ng-scope" runat="server">T-0: July 30, 2019 05:00:00 UTC</span>
                            </p>
                            <p ID="rocketLocation2" class="ng-binding" runat="server">
                                43/3 (43L), Plesetsk Cosmodrome, Russia <a target="_blank" class="ng-scope" href="https://www.google.com/maps/?q=62.927300000000000,40.450000000000000"><i class="fa fa-map-marker"></i></a>
                            </p>
                        </div>
                        <p ID="rocketMission2" class="ng-binding ng-scope" style="padding-bottom:70px" runat="server">
                            The Meridian series of communications satellites is reported to be the replacement for all the Molniya-1T, 
                            the Molniya-3 and Molniya-3K satellite series and possibly also for the communication component of the Parus. 
                            They are launched into highly eccentric Molniya-orbits. Meridian is the highly eccentric orbit (HEO) component of 
                            the Integrated Satellite Communications System (ISSS), where they work in conjunction with the geostationary Raduga-1M 
                            (Globus-M) satellites. The bus structure is reportedly pressurized, possibly based on the Uragan-M bus. 
                            Meridian satellites carry three transponders operating in different frequency bands.
                        </p>
                        <p class="ng-scope" runat="server">
                            <a class="ng-binding" runat="server"></a>
                        </p>
                    </div>
                </div>
                <div class="jumbotron" runat="server">
                    <div style="align-items:center" runat="server">
                        <img ID="rocketImg3" alt="/Images/placeholder_1920.png" src="https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png" width="925" height="600" runat="server"/>
                    </div>
                    <div style="align-items:center;padding-bottom:50px" runat="server">
                        <h3 ID="rocketName3" class="ng-binding" runat="server">Soyuz 2.1a/Fregat | Meridian-M №18</h3>
                        <p class="tzero" runat="server">
                            <span ID="rocketTimer3" class="ng-scope ng-isolate-scope" runat="server">1d 9h 36m 54s</span>
                        </p>
                        <div class="text-muted" runat="server">
                            <p runat="server">
                                <span ID="rocketStart3" class="ng-binding ng-scope" runat="server">T-0: July 30, 2019 05:00:00 UTC</span>
                            </p>
                            <p ID="rocketLocation3" class="ng-binding" runat="server">
                                43/3 (43L), Plesetsk Cosmodrome, Russia <a target="_blank" class="ng-scope" href="https://www.google.com/maps/?q=62.927300000000000,40.450000000000000"><i class="fa fa-map-marker"></i></a>
                            </p>
                        </div>
                        <p ID="rocketMission3" class="ng-binding ng-scope" style="padding-bottom:70px" runat="server">
                            The Meridian series of communications satellites is reported to be the replacement for all the Molniya-1T, 
                            the Molniya-3 and Molniya-3K satellite series and possibly also for the communication component of the Parus. 
                            They are launched into highly eccentric Molniya-orbits. Meridian is the highly eccentric orbit (HEO) component of 
                            the Integrated Satellite Communications System (ISSS), where they work in conjunction with the geostationary Raduga-1M 
                            (Globus-M) satellites. The bus structure is reportedly pressurized, possibly based on the Uragan-M bus. 
                            Meridian satellites carry three transponders operating in different frequency bands.
                        </p>
                        <p class="ng-scope" runat="server">
                            <a class="ng-binding" runat="server"></a>
                        </p>
                    </div>
                </div>
                <div class="jumbotron" runat="server">
                    <div style="align-items:center" runat="server">
                        <img ID="rocketImg4" alt="/Images/placeholder_1920.png" src="https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png" width="925" height="600" runat="server"/>
                    </div>
                    <div style="align-items:center;padding-bottom:50px" runat="server">
                        <h3 ID="rocketName4" class="ng-binding" runat="server">Soyuz 2.1a/Fregat | Meridian-M №18</h3>
                        <p class="tzero" runat="server">
                            <span ID="rocketTimer4" class="ng-scope ng-isolate-scope" runat="server">1d 9h 36m 54s</span>
                        </p>
                        <div class="text-muted" runat="server">
                            <p runat="server">
                                <span ID="rocketStart4" class="ng-binding ng-scope" runat="server">T-0: July 30, 2019 05:00:00 UTC</span>
                            </p>
                            <p ID="rocketLocation4" class="ng-binding" runat="server">
                                43/3 (43L), Plesetsk Cosmodrome, Russia <a target="_blank" class="ng-scope" href="https://www.google.com/maps/?q=62.927300000000000,40.450000000000000"><i class="fa fa-map-marker"></i></a>
                            </p>
                        </div>
                        <p ID="rocketMission4" class="ng-binding ng-scope" style="padding-bottom:70px" runat="server">
                            The Meridian series of communications satellites is reported to be the replacement for all the Molniya-1T, 
                            the Molniya-3 and Molniya-3K satellite series and possibly also for the communication component of the Parus. 
                            They are launched into highly eccentric Molniya-orbits. Meridian is the highly eccentric orbit (HEO) component of 
                            the Integrated Satellite Communications System (ISSS), where they work in conjunction with the geostationary Raduga-1M 
                            (Globus-M) satellites. The bus structure is reportedly pressurized, possibly based on the Uragan-M bus. 
                            Meridian satellites carry three transponders operating in different frequency bands.
                        </p>
                        <p class="ng-scope" runat="server">
                            <a class="ng-binding" runat="server"></a>
                        </p>
                    </div>
                </div>
                <div class="jumbotron" runat="server">
                    <div style="align-items:center" runat="server">
                        <img id="rocketImg5" runat="server" alt="/Images/placeholder_1920.png" src="https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png" width="925" height="600" />
                    </div>
                    <div style="align-items:center;padding-bottom:50px" runat="server">
                        <h3 ID="rocketName5" class="ng-binding" runat="server">Soyuz 2.1a/Fregat | Meridian-M №18</h3>
                        <p class="tzero" runat="server">
                            <span ID="rocketTimer5" class="ng-scope ng-isolate-scope" runat="server">1d 9h 36m 54s</span>
                        </p>
                        <div class="text-muted" runat="server">
                            <p runat="server">
                                <span ID="rocketStart5" class="ng-binding ng-scope" runat="server">T-0: July 30, 2019 05:00:00 UTC</span>
                            </p>
                            <p ID="rocketLocation5" class="ng-binding" runat="server">
                                43/3 (43L), Plesetsk Cosmodrome, Russia <a target="_blank" class="ng-scope" href="https://www.google.com/maps/?q=62.927300000000000,40.450000000000000"><i class="fa fa-map-marker"></i></a>
                            </p>
                        </div>
                        <p ID="rocketMission5" class="ng-binding ng-scope" style="padding-bottom:70px" runat="server">
                            The Meridian series of communications satellites is reported to be the replacement for all the Molniya-1T, 
                            the Molniya-3 and Molniya-3K satellite series and possibly also for the communication component of the Parus. 
                            They are launched into highly eccentric Molniya-orbits. Meridian is the highly eccentric orbit (HEO) component of 
                            the Integrated Satellite Communications System (ISSS), where they work in conjunction with the geostationary Raduga-1M 
                            (Globus-M) satellites. The bus structure is reportedly pressurized, possibly based on the Uragan-M bus. 
                            Meridian satellites carry three transponders operating in different frequency bands.
                        </p>
                        <p class="ng-scope" runat="server">
                            <a class="ng-binding" runat="server"></a>
                        </p>
                    </div>
                </div>
            </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="Timer1" EventName="Tick">
                </asp:AsyncPostBackTrigger>
            </Triggers>
        </asp:UpdatePanel>
    </div>
</asp:Content>
