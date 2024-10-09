﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RafaelChicovisBlog.Infra.Database;

#nullable disable

namespace RafaelChicovisBlog.Migrations
{
    [DbContext(typeof(RCBlogDbContext))]
    partial class RCBlogDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("public")
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("RafaelChicovisBlog.Domains.Post", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("character varying(150)");

                    b.Property<DateTime>("PostDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("PostDownloadUrl")
                        .IsRequired()
                        .HasMaxLength(450)
                        .HasColumnType("character varying(450)");

                    b.Property<string>("ThumbnailUrl")
                        .IsRequired()
                        .HasMaxLength(450)
                        .HasColumnType("character varying(450)");

                    b.HasKey("Id");

                    b.ToTable("Posts", "public");
                });
#pragma warning restore 612, 618
        }
    }
}