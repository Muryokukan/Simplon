﻿// <auto-generated />
using System;
using GestionBibliotheque.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ProjetSolo.Migrations
{
    [DbContext(typeof(BibliothequeContext))]
    partial class BibliothequeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("GestionBibliotheque.Models.Emprunt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DateEmprunt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("DateRetourEffective")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("DateRetourPrevue")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("LivreId")
                        .HasColumnType("integer");

                    b.Property<int>("UtilisateurId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("LivreId");

                    b.HasIndex("UtilisateurId");

                    b.ToTable("Emprunts");
                });

            modelBuilder.Entity("GestionBibliotheque.Models.Livre", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Auteur")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("DatePublication")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("EstDisponible")
                        .HasColumnType("boolean");

                    b.Property<string>("ISBN")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Titre")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Livres");
                });

            modelBuilder.Entity("GestionBibliotheque.Models.Utilisateur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DateInscription")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Utilisateurs");
                });

            modelBuilder.Entity("GestionBibliotheque.Models.Emprunt", b =>
                {
                    b.HasOne("GestionBibliotheque.Models.Livre", "Livre")
                        .WithMany("Emprunts")
                        .HasForeignKey("LivreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GestionBibliotheque.Models.Utilisateur", "Utilisateur")
                        .WithMany("Emprunts")
                        .HasForeignKey("UtilisateurId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Livre");

                    b.Navigation("Utilisateur");
                });

            modelBuilder.Entity("GestionBibliotheque.Models.Livre", b =>
                {
                    b.Navigation("Emprunts");
                });

            modelBuilder.Entity("GestionBibliotheque.Models.Utilisateur", b =>
                {
                    b.Navigation("Emprunts");
                });
#pragma warning restore 612, 618
        }
    }
}
