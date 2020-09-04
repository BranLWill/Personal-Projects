<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="SpaceLaunch.About" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron" style="background-color: #808080">
        <h2 style="color: #000000"><%: Title %> Space<span style="color: Highlight">Launch</span></h2>
        <p style="color: #000000">
            Space<span style="color: Highlight">Launch</span> is currently a web app that will display the five earliest space launches.

        </p>
    </div>
</asp:Content>
