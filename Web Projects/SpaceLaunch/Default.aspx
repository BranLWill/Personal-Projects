<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SpaceLaunch._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron" style="background-color: #808080">
        <h1 style="color: #000000">Space<span style="color: Highlight">Launch</span></h1>
        <p class="lead" style="color: #000000">Where you can access any upcoming space launches. Enter in a Location you want to search or leave it blank to view all.</p>
        <p style="vertical-align: middle; text-align: center; color: #000000;">
            <asp:Label ID="LatLabel" runat="server" Text="Latitude:"></asp:Label>
            <asp:Textbox id="userLat" runat="server" autofocus="autofocus" type="text" /></p>
        <p style="vertical-align: middle; text-align: center; color: #000000;">
            <asp:Label ID="LongLabel" runat="server" Text="Longitude:"></asp:Label>
            <asp:Textbox id="userLon" runat="server" type="text" /></p>
        <p style="text-align: center; vertical-align: middle">
            <asp:Button ID="SubmitBtn0" runat="server" BackColor="Highlight" ForeColor="Black" Text="Submit" OnClick="SubmitBtn_Click" />
        </p>
    </div>

    <script type="text/javascript">
        var lat = document.getElementById("<%= userLat.ClientID %>");
        var lon = document.getElementById("<%= userLon.ClientID %>");

        if (navigator.geolocation) 
            navigator.geolocation.getCurrentPosition(showPosition);
        else
            alert("Geolocation is not supported by this browser.");

        function showPosition(position) {
            lat.value = position.coords.latitude;
            lon.value = position.coords.longitude;
        }
    </script>

</asp:Content>